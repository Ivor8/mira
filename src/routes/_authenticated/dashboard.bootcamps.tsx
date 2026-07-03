import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { formatXAF } from "@/lib/format";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/dashboard/bootcamps")({
  component: MyBootcamps,
});

function MyBootcamps() {
  const { user } = useAuthUser();
  const { data: regs, isLoading } = useQuery({
    queryKey: ["my-regs", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("*, bootcamp:bootcamps(*)")
        .eq("student_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  return (
    <AppShell mode="student">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">My bootcamps</h1>
          <p className="mt-1 text-muted-foreground">All bootcamps you are enrolled in.</p>
        </div>
        <Link to="/bootcamps">
          <Button className="rounded-full bg-brand-gradient text-white">Browse bootcamps</Button>
        </Link>
      </div>

      {isLoading && <p className="text-muted-foreground">Loading…</p>}
      {!isLoading && (regs ?? []).length === 0 && (
        <div className="rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">
          You have not enrolled in any bootcamps yet.
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        {(regs ?? []).map((r) => (
          <div key={r.id} className="card-elevated p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-bold">{r.bootcamp?.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.bootcamp?.short_description}</p>
              </div>
              <StatusBadge status={r.status} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span>Payment: <StatusBadge status={r.payment_status} /></span>
              {r.bootcamp?.start_date && <span>Starts {format(new Date(r.bootcamp.start_date), "PP")}</span>}
              {r.bootcamp?.price != null && <span>{formatXAF(r.bootcamp.price, r.bootcamp.currency)}</span>}
            </div>
            <div className="mt-4 flex gap-2">
              <Link to="/bootcamps/$slug" params={{ slug: r.bootcamp?.slug ?? "" }}>
                <Button variant="secondary" size="sm" className="rounded-full">View details</Button>
              </Link>
              <Link to="/dashboard/sessions">
                <Button variant="outline" size="sm" className="rounded-full">Sessions</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
