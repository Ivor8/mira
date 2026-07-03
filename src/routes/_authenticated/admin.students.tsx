import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { AdminGuard } from "@/components/AdminGuard";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Award, MessageSquare } from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/admin/students")({
  component: AdminStudentsPage,
});

function AdminStudentsPage() {
  return (
    <AdminGuard>
      <AdminStudents />
    </AdminGuard>
  );
}

function AdminStudents() {
  const qc = useQueryClient();
  const [ticketDialog, setTicketDialog] = useState<{ id: string; response: string } | null>(null);

  const { data: registrations, isLoading } = useQuery({
    queryKey: ["admin-registrations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("*, bootcamp:bootcamps(title), student:profiles(full_name, phone)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const { data: tickets } = useQuery({
    queryKey: ["admin-tickets"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("support_tickets")
        .select("*, user:profiles(full_name)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const updateReg = useMutation({
    mutationFn: async ({ id, status, payment_status }: { id: string; status?: string; payment_status?: string }) => {
      const patch: Record<string, string> = {};
      if (status) patch.status = status;
      if (payment_status) patch.payment_status = payment_status;
      const { error } = await supabase.from("registrations").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Registration updated");
      qc.invalidateQueries({ queryKey: ["admin-registrations"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const issueCert = useMutation({
    mutationFn: async ({ student_id, bootcamp_id }: { student_id: string; bootcamp_id: string }) => {
      const { error } = await supabase.from("certificates").insert({ student_id, bootcamp_id });
      if (error) throw error;
      await supabase.from("notifications").insert({
        user_id: student_id,
        title: "Certificate issued",
        body: "Congratulations! Your bootcamp certificate is ready.",
        link: "/dashboard/certificates",
        type: "success",
      });
    },
    onSuccess: () => toast.success("Certificate issued"),
    onError: (e: Error) => toast.error(e.message),
  });

  const respondTicket = useMutation({
    mutationFn: async () => {
      if (!ticketDialog) return;
      const ticket = tickets?.find((t) => t.id === ticketDialog.id);
      const { error } = await supabase
        .from("support_tickets")
        .update({ response: ticketDialog.response, status: "resolved" })
        .eq("id", ticketDialog.id);
      if (error) throw error;
      if (ticket?.user_id) {
        await supabase.from("notifications").insert({
          user_id: ticket.user_id,
          title: "Support ticket updated",
          body: "Our team has responded to your support request.",
          link: "/dashboard/support",
          type: "info",
        });
      }
    },
    onSuccess: () => {
      toast.success("Response sent");
      setTicketDialog(null);
      qc.invalidateQueries({ queryKey: ["admin-tickets"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <AppShell mode="admin">
      <h1 className="font-display text-3xl font-bold">Students</h1>
      <p className="mt-1 text-muted-foreground">Manage enrollments, certificates, and support tickets.</p>

      <Tabs defaultValue="enrollments" className="mt-8">
        <TabsList>
          <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
          <TabsTrigger value="tickets"><MessageSquare className="mr-2 h-4 w-4" />Support tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="enrollments" className="mt-4">
          <div className="card-elevated overflow-hidden p-0">
            {isLoading && <p className="p-6 text-muted-foreground">Loading…</p>}
            {!isLoading && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Bootcamp</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(registrations ?? []).map((r) => (
                    <TableRow key={r.id}>
                      <TableCell>
                        <p className="font-medium">{(r.student as any)?.full_name ?? "—"}</p>
                        <p className="text-xs text-muted-foreground">{(r.student as any)?.phone}</p>
                      </TableCell>
                      <TableCell>{(r.bootcamp as any)?.title}</TableCell>
                      <TableCell>
                        <Select value={r.status} onValueChange={(v) => updateReg.mutate({ id: r.id, status: v })}>
                          <SelectTrigger className="h-8 w-32"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="reserved">Reserved</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell><StatusBadge status={r.payment_status} /></TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full"
                          onClick={() => issueCert.mutate({ student_id: r.student_id, bootcamp_id: r.bootcamp_id })}
                        >
                          <Award className="mr-1 h-3 w-3" /> Cert
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="mt-4 space-y-3">
          {(tickets ?? []).length === 0 && <p className="text-sm text-muted-foreground">No support tickets.</p>}
          {(tickets ?? []).map((t) => (
            <div key={t.id} className="card-elevated p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">{t.subject}</p>
                  <p className="text-xs text-muted-foreground">{(t.user as any)?.full_name} · {format(new Date(t.created_at), "PPp")}</p>
                </div>
                <StatusBadge status={t.status} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">{t.message}</p>
              {t.response && <p className="mt-3 rounded-xl bg-muted/40 p-3 text-sm">{t.response}</p>}
              {t.status !== "resolved" && t.status !== "closed" && (
                <Button size="sm" className="mt-3 rounded-full" variant="outline" onClick={() => setTicketDialog({ id: t.id, response: "" })}>
                  Respond
                </Button>
              )}
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <Dialog open={!!ticketDialog} onOpenChange={() => setTicketDialog(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Respond to ticket</DialogTitle></DialogHeader>
          <div>
            <Label>Response</Label>
            <Textarea rows={5} value={ticketDialog?.response ?? ""} onChange={(e) => setTicketDialog((d) => d ? { ...d, response: e.target.value } : null)} />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTicketDialog(null)}>Cancel</Button>
            <Button onClick={() => respondTicket.mutate()} className="bg-brand-gradient text-white">Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
