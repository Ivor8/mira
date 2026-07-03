import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/dashboard/support")({
  component: StudentSupport,
});

const ticketSchema = z.object({
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(10).max(3000),
});

function StudentSupport() {
  const { user } = useAuthUser();
  const qc = useQueryClient();
  const [form, setForm] = useState({ subject: "", message: "" });

  const { data: tickets, isLoading } = useQuery({
    queryKey: ["my-tickets", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("support_tickets")
        .select("*")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const createTicket = useMutation({
    mutationFn: async () => {
      const parsed = ticketSchema.safeParse(form);
      if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
      const { error } = await supabase.from("support_tickets").insert({
        user_id: user!.id,
        subject: parsed.data.subject,
        message: parsed.data.message,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Support ticket submitted");
      setForm({ subject: "", message: "" });
      qc.invalidateQueries({ queryKey: ["my-tickets"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <AppShell mode="student">
      <h1 className="font-display text-3xl font-bold">Support</h1>
      <p className="mt-1 text-muted-foreground">Open a ticket and track responses from our team.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTicket.mutate();
        }}
        className="card-elevated mt-8 max-w-xl space-y-4 p-6"
      >
        <h2 className="font-display text-lg font-bold">New ticket</h2>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
        </div>
        <Button type="submit" disabled={createTicket.isPending} className="rounded-full bg-brand-gradient text-white">
          {createTicket.isPending ? "Submitting…" : "Submit ticket"}
        </Button>
      </form>

      <div className="mt-10">
        <h2 className="font-display text-xl font-bold">Your tickets</h2>
        {isLoading && <p className="mt-4 text-muted-foreground">Loading…</p>}
        {!isLoading && (tickets ?? []).length === 0 && (
          <p className="mt-4 text-sm text-muted-foreground">No tickets yet.</p>
        )}
        <div className="mt-4 space-y-3">
          {(tickets ?? []).map((t) => (
            <div key={t.id} className="card-elevated p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="font-semibold">{t.subject}</p>
                <StatusBadge status={t.status} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">{t.message}</p>
              {t.response && (
                <div className="mt-4 rounded-xl bg-muted/40 p-4 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Team response</p>
                  <p className="mt-1 whitespace-pre-wrap">{t.response}</p>
                </div>
              )}
              <p className="mt-3 text-xs text-muted-foreground">{format(new Date(t.created_at), "PPp")}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
