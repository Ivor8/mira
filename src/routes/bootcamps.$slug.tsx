import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle2, GraduationCap, Rocket, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { formatXAF, daysUntil } from "@/lib/format";
import { useAuthUser } from "@/hooks/useAuthUser";

export const Route = createFileRoute("/bootcamps/$slug")({
  component: BootcampDetail,
});

function BootcampDetail() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const { user } = useAuthUser();

  const { data: b, isLoading } = useQuery({
    queryKey: ["bootcamp", slug],
    queryFn: async () => {
      const { data, error } = await supabase.from("bootcamps").select("*").eq("slug", slug).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const registrationQuery = useQuery({
    queryKey: ["registration", user?.id, slug],
    enabled: Boolean(user?.id && b?.id),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .eq("bootcamp_id", b!.id)
        .eq("student_id", user!.id)
        .limit(1);
      if (error) throw error;
      return data ?? [];
    },
  });

  const alreadyRegistered = !!registrationQuery.data?.length;

  const register = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("Please sign in first");
      if (alreadyRegistered) throw new Error("You are already registered for this bootcamp");
      const { error } = await supabase.from("registrations").insert({ bootcamp_id: b!.id, student_id: user.id });
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Seat reserved!"); navigate({ to: "/dashboard" }); },
    onError: (e: any) => toast.error(e.message ?? "Could not register"),
  });

  if (isLoading) return <div className="min-h-screen bg-background"><SiteHeader /><div className="mx-auto max-w-7xl p-24 text-center text-muted-foreground">Loading…</div></div>;
  if (!b) return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 pt-40 text-center">
        <h1 className="font-display text-3xl font-bold">Bootcamp not found</h1>
        <p className="mt-2 text-muted-foreground">The bootcamp you're looking for doesn't exist or was archived.</p>
        <Link to="/bootcamps" className="mt-6 inline-block"><Button className="rounded-full bg-brand-gradient text-white">Browse bootcamps</Button></Link>
      </div>
    </div>
  );

  const remaining = Math.max((b.max_seats ?? 0) - (b.seats_taken ?? 0), 0);
  const dLeft = daysUntil(b.registration_deadline);
  const canRegister = b.status === "published" && remaining > 0 && (dLeft == null || dLeft >= 0);

  const curriculum = (b.curriculum as any[]) ?? [];
  const benefits = (b.benefits as any[]) ?? [];
  const projects = (b.projects as any[]) ?? [];
  const requirements = (b.requirements as any[]) ?? [];
  const faqs = (b.faqs as any[]) ?? [];
  const instructor = (b.instructor as any) ?? {};

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-brand-gradient opacity-10" />
          <div className="absolute inset-0 bg-hero-grid opacity-30" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-muted-foreground">
              <Link to="/bootcamps" className="hover:text-foreground">Bootcamps</Link>
              <ChevronRight className="mx-2 inline h-3 w-3" />
              <span className="text-foreground">{b.title}</span>
            </motion.nav>
            <div className="mt-6 grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold sm:text-6xl">{b.title}</motion.h1>
                <p className="mt-4 text-lg text-muted-foreground">{b.short_description ?? b.description}</p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> {b.duration_weeks ?? 8} weeks</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" /> Starts {b.start_date ?? "TBA"}</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> {remaining} seats remaining</span>
                </div>
              </div>
              <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card-elevated h-fit p-6 glow-primary">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Tuition</p>
                <p className="mt-2 font-display text-4xl font-bold text-brand-gradient">{formatXAF(b.price, b.currency)}</p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p><Calendar className="mr-2 inline h-4 w-4 text-primary" /> Deadline: {b.registration_deadline ?? "Open"}</p>
                  <p><Users className="mr-2 inline h-4 w-4 text-primary" /> {remaining} of {b.max_seats} seats left</p>
                </div>
                {user ? (
                  <Button
                    disabled={!canRegister || register.isPending || alreadyRegistered}
                    onClick={() => register.mutate()}
                    className="mt-6 w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:opacity-90"
                  >
                    {register.isPending
                      ? "Reserving…"
                      : alreadyRegistered
                      ? "Already registered"
                      : canRegister
                      ? "Reserve my seat"
                      : "Registration closed"}
                  </Button>
                ) : (
                  <Link to="/auth" search={{ next: `/bootcamps/${b.slug}` }}>
                    <Button className="mt-6 w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30">Sign in to register</Button>
                  </Link>
                )}
                <p className="mt-3 text-center text-xs text-muted-foreground">Secure MTN MoMo & Orange Money supported</p>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              {b.description && (
                <div>
                  <h2 className="font-display text-2xl font-bold">About this bootcamp</h2>
                  <p className="mt-3 whitespace-pre-wrap text-muted-foreground">{b.description}</p>
                </div>
              )}

              <Section title="Curriculum" icon={GraduationCap}>
                {curriculum.length ? (
                  <ol className="space-y-3">
                    {curriculum.map((m: any, i: number) => (
                      <li key={i} className="card-elevated flex items-start gap-4 p-4">
                        <span className="font-display text-sm font-bold text-brand-gradient">M{i + 1}</span>
                        <div><p className="font-semibold">{m.title ?? m}</p>{m.description && <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>}</div>
                      </li>
                    ))}
                  </ol>
                ) : <Empty text="Curriculum coming soon" />}
              </Section>

              <Section title="Projects you'll ship" icon={Rocket}>
                {projects.length ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {projects.map((p: any, i: number) => (
                      <div key={i} className="card-elevated p-4">
                        <p className="font-semibold">{p.title ?? p}</p>
                        {p.description && <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>}
                      </div>
                    ))}
                  </div>
                ) : <Empty text="Project list coming soon" />}
              </Section>

              <Section title="What you'll get" icon={CheckCircle2}>
                {benefits.length ? (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {benefits.map((x: any, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {x.title ?? x}</li>
                    ))}
                  </ul>
                ) : <Empty text="Benefits will be listed here" />}
              </Section>

              <Section title="Requirements">
                {requirements.length ? (
                  <ul className="space-y-2">
                    {requirements.map((r: any, i: number) => <li key={i} className="text-sm text-muted-foreground">• {r.title ?? r}</li>)}
                  </ul>
                ) : <Empty text="No prior experience required" />}
              </Section>

              <Section title="FAQ">
                {faqs.length ? (
                  <div className="space-y-3">
                    {faqs.map((f: any, i: number) => (
                      <div key={i} className="card-elevated p-4">
                        <p className="font-semibold">{f.q ?? f.question}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{f.a ?? f.answer}</p>
                      </div>
                    ))}
                  </div>
                ) : <Empty text="FAQ coming soon" />}
              </Section>
            </div>

            <aside className="space-y-6">
              <div className="card-elevated p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Instructor</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-brand-gradient" />
                  <div>
                    <p className="font-semibold">{instructor.name ?? "Mira Edge Faculty"}</p>
                    <p className="text-xs text-muted-foreground">{instructor.title ?? "Senior Engineer"}</p>
                  </div>
                </div>
                {instructor.bio && <p className="mt-3 text-sm text-muted-foreground">{instructor.bio}</p>}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, icon: Icon, children }: any) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
        {Icon && <Icon className="h-5 w-5 text-primary" />} {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="rounded-2xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground">{text}</p>;
}
