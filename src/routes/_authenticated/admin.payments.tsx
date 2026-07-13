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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { formatXAF } from "@/lib/format";
import { Plus } from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/admin/payments")({
  component: AdminPaymentsPage,
});

function AdminPaymentsPage() {
  return (
    <AdminGuard>
      <AdminPayments />
    </AdminGuard>
  );
}

function AdminPayments() {
  const { user } = useAuthUser();
  const qc = useQueryClient();
  const [manualOpen, setManualOpen] = useState(false);
  const [manual, setManual] = useState({ student_id: "", bootcamp_id: "", amount: "", provider: "manual" as const });

  const { data: payments, isLoading } = useQuery({
    queryKey: ["admin-payments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("payments")
        .select("*, bootcamp:bootcamps(title)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      const payments = data ?? [];
      const studentIds = Array.from(new Set(payments.map((p: any) => p.student_id).filter(Boolean)));
      if (studentIds.length === 0) return payments;
      const { data: students, error: studentError } = await supabase
        .from("profiles")
        .select("id, full_name")
        .in("id", studentIds);
      if (studentError) throw studentError;
      const studentMap = new Map((students ?? []).map((s: any) => [s.id, s]));
      return payments.map((p: any) => ({ ...p, student: studentMap.get(p.student_id) ?? null }));
    },
  });

  const { data: students } = useQuery({
    queryKey: ["admin-student-profiles"],
    queryFn: async () => {
      const { data } = await supabase.from("profiles").select("id, full_name").order("full_name");
      return data ?? [];
    },
  });

  const { data: bootcamps } = useQuery({
    queryKey: ["admin-bootcamps-pay"],
    queryFn: async () => {
      const { data } = await supabase.from("bootcamps").select("id, title, price, currency");
      return data ?? [];
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status, registration_id }: { id: string; status: string; registration_id?: string | null }) => {
      const { error } = await supabase.from("payments").update({ status }).eq("id", id);
      if (error) throw error;
      if (registration_id && status === "successful") {
        await supabase.from("registrations").update({ payment_status: "successful", status: "confirmed" }).eq("id", registration_id);
        const pay = payments?.find((p) => p.id === id);
        if (pay?.student_id) {
          await supabase.from("notifications").insert({
            user_id: pay.student_id,
            title: "Payment confirmed",
            body: "Your payment has been confirmed. Welcome to the cohort!",
            link: "/dashboard/payments",
            type: "success",
          });
        }
      }
    },
    onSuccess: () => {
      toast.success("Payment updated");
      qc.invalidateQueries({ queryKey: ["admin-payments"] });
      qc.invalidateQueries({ queryKey: ["admin-registrations"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const createManual = useMutation({
    mutationFn: async () => {
      const bootcamp = bootcamps?.find((b) => b.id === manual.bootcamp_id);
      if (!manual.student_id || !manual.bootcamp_id) throw new Error("Select student and bootcamp");
      const { error } = await supabase.from("payments").insert({
        student_id: manual.student_id,
        bootcamp_id: manual.bootcamp_id,
        amount: Number(manual.amount) || bootcamp?.price || 0,
        currency: bootcamp?.currency ?? "XAF",
        provider: "manual",
        status: "successful",
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Manual payment recorded");
      setManualOpen(false);
      qc.invalidateQueries({ queryKey: ["admin-payments"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <AppShell mode="admin">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Payments</h1>
          <p className="mt-1 text-muted-foreground">Review and confirm student payments.</p>
        </div>
        <Button onClick={() => setManualOpen(true)} className="rounded-full bg-brand-gradient text-white">
          <Plus className="mr-2 h-4 w-4" /> Manual payment
        </Button>
      </div>

      <div className="card-elevated mt-8 overflow-hidden p-0">
        {isLoading && <p className="p-6 text-muted-foreground">Loading…</p>}
        {!isLoading && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Bootcamp</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(payments ?? []).map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{(p.student as any)?.full_name ?? "—"}</TableCell>
                  <TableCell>{(p.bootcamp as any)?.title ?? "—"}</TableCell>
                  <TableCell>{formatXAF(p.amount, p.currency)}</TableCell>
                  <TableCell className="capitalize">{p.provider.replace(/_/g, " ")}</TableCell>
                  <TableCell className="text-muted-foreground">{p.phone_number ?? "—"}</TableCell>
                  <TableCell><StatusBadge status={p.status} /></TableCell>
                  <TableCell className="text-muted-foreground">{format(new Date(p.created_at), "PP")}</TableCell>
                  <TableCell className="text-right">
                    {p.status === "pending" && (
                      <div className="flex justify-end gap-1">
                        <Button size="sm" variant="secondary" className="rounded-full" onClick={() => updateStatus.mutate({ id: p.id, status: "successful", registration_id: p.registration_id })}>
                          Confirm
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive rounded-full" onClick={() => updateStatus.mutate({ id: p.id, status: "failed" })}>
                          Reject
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <Dialog open={manualOpen} onOpenChange={setManualOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Record manual payment</DialogTitle></DialogHeader>
          <div className="grid gap-4 py-2">
            <div>
              <Label>Student</Label>
              <Select value={manual.student_id} onValueChange={(v) => setManual({ ...manual, student_id: v })}>
                <SelectTrigger><SelectValue placeholder="Select student" /></SelectTrigger>
                <SelectContent>
                  {(students ?? []).map((s) => <SelectItem key={s.id} value={s.id}>{s.full_name ?? s.id.slice(0, 8)}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Bootcamp</Label>
              <Select value={manual.bootcamp_id} onValueChange={(v) => {
                const b = bootcamps?.find((x) => x.id === v);
                setManual({ ...manual, bootcamp_id: v, amount: String(b?.price ?? "") });
              }}>
                <SelectTrigger><SelectValue placeholder="Select bootcamp" /></SelectTrigger>
                <SelectContent>
                  {(bootcamps ?? []).map((b) => <SelectItem key={b.id} value={b.id}>{b.title}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div><Label>Amount</Label><Input type="number" value={manual.amount} onChange={(e) => setManual({ ...manual, amount: e.target.value })} /></div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setManualOpen(false)}>Cancel</Button>
            <Button onClick={() => createManual.mutate()} className="bg-brand-gradient text-white">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
