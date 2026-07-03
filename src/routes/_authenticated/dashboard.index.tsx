import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { GraduationCap, Calendar, Award, CreditCard, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/dashboard/")({
  component: DashboardHome,
});

function DashboardHome() {
  const { user } = useAuthUser();
  const { data: regs } = useQuery({
    queryKey: ["my-regs", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("registrations").select("*, bootcamp:bootcamps(*)").eq("student_id", user!.id);
      return data ?? [];
    },
  });
  const { data: nextSession } = useQuery({
    queryKey: ["next-session", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("sessions").select("*, bootcamp:bootcamps(title,slug)").gte("session_date", new Date().toISOString().slice(0, 10)).order("session_date").order("start_time").limit(1);
      return data?.[0] ?? null;
    },
  });

  const { data: certs } = useQuery({
    queryKey: ["my-cert-count", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { count } = await supabase.from("certificates").select("*", { count: "exact", head: true }).eq("student_id", user!.id);
      return count ?? 0;
    },
  });

  const stats = [
    { icon: GraduationCap, k: regs?.length ?? 0, v: "Enrolled bootcamps" },
    { icon: Calendar, k: nextSession ? "1" : "0", v: "Upcoming session" },
    { icon: Award, k: certs ?? 0, v: "Certificates earned" },
    { icon: CreditCard, k: regs?.filter((r) => r.payment_status === "successful").length ?? 0, v: "Successful payments" },
  ];

  return (
    <AppShell mode="student">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Welcome back 👋</h1>
        <p className="mt-1 text-muted-foreground">Here's what's happening in your learning journey.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="card-elevated p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white"><s.icon className="h-5 w-5" /></div>
            <p className="mt-4 font-display text-3xl font-bold">{s.k}</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="card-elevated p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">My bootcamps</h2>
            <Link to="/bootcamps" className="text-sm text-primary hover:underline">Browse all →</Link>
          </div>
          <div className="mt-4 space-y-3">
            {(regs ?? []).length === 0 && (
              <p className="rounded-xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground">You haven't enrolled in any bootcamps yet.</p>
            )}
            {(regs ?? []).map((r: any) => (
              <div key={r.id} className="flex items-center justify-between rounded-xl border border-border/60 p-4">
                <div>
                  <p className="font-semibold">{r.bootcamp?.title}</p>
                  <p className="text-xs text-muted-foreground">Status: {r.status} · Payment: {r.payment_status}</p>
                </div>
                <Link to="/bootcamps/$slug" params={{ slug: r.bootcamp?.slug }}><Button variant="secondary" size="sm" className="rounded-full">Details</Button></Link>
              </div>
            ))}
          </div>
        </div>

        <div className="card-elevated p-6">
          <h2 className="font-display text-xl font-bold">Next live session</h2>
          {nextSession ? (
            <div className="mt-4">
              <p className="font-semibold">{nextSession.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{nextSession.bootcamp?.title}</p>
              <p className="mt-3 text-sm">{format(new Date(nextSession.session_date), "PPP")}</p>
              <p className="text-sm text-muted-foreground">{nextSession.start_time} — {nextSession.end_time}</p>
              <a href={nextSession.meet_url} target="_blank" rel="noreferrer" className="mt-4 inline-block w-full">
                <Button className="w-full rounded-full bg-brand-gradient text-white">Join live class <ExternalLink className="ml-2 h-4 w-4" /></Button>
              </a>
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">No upcoming sessions scheduled.</p>
          )}
        </div>
      </div>
    </AppShell>
  );
}
