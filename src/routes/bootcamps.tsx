import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BootcampCard } from "@/routes/index";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/bootcamps")({
  head: () => ({
    meta: [
      { title: "Bootcamps — Mira Edge Academy" },
      { name: "description", content: "Browse upcoming live cohorts in full-stack web development and AI-assisted engineering." },
      { property: "og:title", content: "Bootcamps — Mira Edge Academy" },
      { property: "og:description", content: "Browse upcoming live cohorts." },
    ],
  }),
  component: BootcampsPage,
});

function BootcampsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["bootcamps-all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("bootcamps").select("*").in("status", ["published", "closed"]).order("start_date", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Bootcamps</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">All cohorts</h1>
          <p className="mt-4 text-muted-foreground">Live, cohort-based programs designed to make you a shipping full-stack engineer.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-96 animate-pulse rounded-3xl bg-muted/40" />)}
          {!isLoading && (data ?? []).length === 0 && (
            <div className="col-span-full card-elevated py-20 text-center">
              <p className="font-display text-xl font-semibold">No bootcamps published yet</p>
              <p className="mt-2 text-sm text-muted-foreground">Check back soon — new cohorts are added regularly.</p>
            </div>
          )}
          {(data ?? []).map((b) => <BootcampCard key={b.id} b={b} />)}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
