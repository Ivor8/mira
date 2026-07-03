import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { formatXAF } from "@/lib/format";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/dashboard/payments")({
  component: StudentPayments,
});

function StudentPayments() {
  const { user } = useAuthUser();
  const qc = useQueryClient();
  const [bootcampId, setBootcampId] = useState("");
  const [provider, setProvider] = useState<"mtn_momo" | "orange_money">("mtn_momo");
  const [phone, setPhone] = useState("");

  const { data: regs } = useQuery({
    queryKey: ["my-regs-pay", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase
        .from("registrations")
        .select("*, bootcamp:bootcamps(id, title, price, currency)")
        .eq("student_id", user!.id)
        .in("payment_status", ["pending", "failed"]);
      return data ?? [];
    },
  });

  const { data: payments, isLoading } = useQuery({
    queryKey: ["my-payments", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("payments")
        .select("*, bootcamp:bootcamps(title)")
        .eq("student_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const submitPayment = useMutation({
    mutationFn: async () => {
      const reg = regs?.find((r) => r.bootcamp_id === bootcampId);
      if (!reg?.bootcamp) throw new Error("Select a bootcamp");
      if (!phone.trim()) throw new Error("Enter your mobile money number");
      const { error } = await supabase.from("payments").insert({
        student_id: user!.id,
        bootcamp_id: reg.bootcamp_id,
        registration_id: reg.id,
        amount: reg.bootcamp.price,
        currency: reg.bootcamp.currency,
        provider,
        phone_number: phone.trim(),
        status: "pending",
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Payment submitted — an admin will confirm once received.");
      setPhone("");
      setBootcampId("");
      qc.invalidateQueries({ queryKey: ["my-payments"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <AppShell mode="student">
      <h1 className="font-display text-3xl font-bold">Payments</h1>
      <p className="mt-1 text-muted-foreground">Submit MTN MoMo or Orange Money payments for your enrollments.</p>

      {(regs ?? []).length > 0 && (
        <div className="card-elevated mt-8 space-y-4 p-6">
          <h2 className="font-display text-lg font-bold">Submit a payment</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Bootcamp</Label>
              <Select value={bootcampId} onValueChange={setBootcampId}>
                <SelectTrigger><SelectValue placeholder="Select bootcamp" /></SelectTrigger>
                <SelectContent>
                  {(regs ?? []).map((r) => (
                    <SelectItem key={r.id} value={r.bootcamp_id}>
                      {r.bootcamp?.title} — {formatXAF(r.bootcamp?.price ?? 0, r.bootcamp?.currency)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Provider</Label>
              <Select value={provider} onValueChange={(v) => setProvider(v as typeof provider)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtn_momo">MTN MoMo</SelectItem>
                  <SelectItem value="orange_money">Orange Money</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <Label>Phone number</Label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+237 6XX XXX XXX" />
            </div>
          </div>
          <Button
            onClick={() => submitPayment.mutate()}
            disabled={submitPayment.isPending || !bootcampId}
            className="rounded-full bg-brand-gradient text-white"
          >
            {submitPayment.isPending ? "Submitting…" : "Submit payment"}
          </Button>
        </div>
      )}

      <div className="card-elevated mt-8 overflow-hidden p-0">
        <div className="border-b border-border/60 px-6 py-4">
          <h2 className="font-display text-lg font-bold">Payment history</h2>
        </div>
        {isLoading && <p className="p-6 text-muted-foreground">Loading…</p>}
        {!isLoading && (payments ?? []).length === 0 && (
          <p className="p-6 text-sm text-muted-foreground">No payments yet.</p>
        )}
        {(payments ?? []).length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bootcamp</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(payments ?? []).map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.bootcamp?.title ?? "—"}</TableCell>
                  <TableCell>{formatXAF(p.amount, p.currency)}</TableCell>
                  <TableCell className="capitalize">{p.provider.replace(/_/g, " ")}</TableCell>
                  <TableCell><StatusBadge status={p.status} /></TableCell>
                  <TableCell className="text-muted-foreground">{format(new Date(p.created_at), "PP")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </AppShell>
  );
}
