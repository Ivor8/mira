import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { supabase } from "@/integrations/supabase/client";
import { GraduationCap, Calendar, Users, CreditCard, LifeBuoy } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [bootcamps, sessions, regs, payments, tickets] = await Promise.all([
        supabase.from("bootcamps").select("*", { count: "exact", head: true }),
        supabase.from("sessions").select("*", { count: "exact", head: true }),
        supabase.from("registrations").select("*", { count: "exact", head: true }),
        supabase.from("payments").select("*", { count: "exact", head: true }).eq("status", "pending"),
        supabase.from("support_tickets").select("*", { count: "exact", head: true }).eq("status", "open"),
      ]);
      return {
        bootcamps: bootcamps.count ?? 0,
        sessions: sessions.count ?? 0,
        students: regs.count ?? 0,
        pendingPayments: payments.count ?? 0,
        openTickets: tickets.count ?? 0,
      };
    },
  });

  const cards = [
    { icon: GraduationCap, k: stats?.bootcamps ?? "—", v: "Bootcamps", to: "/admin/bootcamps" as const },
    { icon: Calendar, k: stats?.sessions ?? "—", v: "Sessions", to: "/admin/sessions" as const },
    { icon: Users, k: stats?.students ?? "—", v: "Registrations", to: "/admin/students" as const },
    { icon: CreditCard, k: stats?.pendingPayments ?? "—", v: "Pending payments", to: "/admin/payments" as const },
  ];

  return (
    <AppShell mode="admin">
      <h1 className="font-display text-3xl font-bold">Admin overview</h1>
      <p className="mt-2 text-muted-foreground">Manage bootcamps, sessions, students, and payments.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((s) => (
          <Link key={s.v} to={s.to} className="card-elevated block p-5 transition hover:-translate-y-0.5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <s.icon className="h-5 w-5" />
            </div>
            <p className="mt-4 font-display text-3xl font-bold">{s.k}</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</p>
          </Link>
        ))}
      </div>

      {(stats?.openTickets ?? 0) > 0 && (
        <div className="mt-8 card-elevated flex items-center gap-4 p-5">
          <LifeBuoy className="h-8 w-8 text-primary" />
          <div>
            <p className="font-semibold">{stats?.openTickets} open support ticket(s)</p>
            <p className="text-sm text-muted-foreground">Review and respond from the Students section or support workflow.</p>
          </div>
        </div>
      )}
    </AppShell>
  );
}
