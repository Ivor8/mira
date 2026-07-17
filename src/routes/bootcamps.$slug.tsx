import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle2, GraduationCap, Rocket, ChevronRight, Loader2, Phone, Wallet } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const qc = useQueryClient();

  const [showPayModal, setShowPayModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentProvider, setPaymentProvider] = useState<"mtn_momo" | "orange_money">("mtn_momo");
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "initiating" | "pending_pin" | "success" | "failed">("idle");
  const [paymentError, setPaymentError] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const pollIntervalRef = useRef<any>(null);

  useEffect(() => {
    if (user?.phone) {
      setPhoneNumber(user.phone);
    }
  }, [user?.phone]);

  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, []);

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

  const startStatusPolling = (transId: string) => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
    }

    pollIntervalRef.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/payments/status?transId=${transId}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed checking payment status");
        }

        if (data.status === "SUCCESSFUL") {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          setPaymentStatus("success");
          toast.success("Payment confirmed! Seat reserved successfully.");
          registrationQuery.refetch();
          qc.invalidateQueries({ queryKey: ["bootcamp", slug] });
          qc.invalidateQueries({ queryKey: ["registration", user?.id, slug] });

          setTimeout(() => {
            setShowPayModal(false);
            navigate({ to: "/dashboard" });
          }, 2000);
        } else if (data.status === "FAILED") {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          setPaymentStatus("failed");
          setPaymentError("The transaction failed or was canceled. Please ensure your account has sufficient funds and try again.");
          toast.error("Payment failed. Please try again.");
        }
      } catch (err: any) {
        console.error("Polling payment status error:", err);
      }
    }, 3000);
  };

  const handleInitiatePayment = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter your Mobile Money phone number");
      return;
    }
    setPaymentStatus("initiating");
    setPaymentError("");
    setTransactionId("");

    try {
      const res = await fetch("/api/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: b!.price,
          phone: phoneNumber.trim(),
          provider: paymentProvider,
          studentId: user!.id,
          bootcampId: b!.id,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to initiate payment");
      }

      setTransactionId(data.transId);
      setPaymentStatus("pending_pin");
      toast.info("Payment request sent! Check your phone for verification prompt.");
      startStatusPolling(data.transId);
    } catch (err: any) {
      setPaymentStatus("idle");
      setPaymentError(err.message || "Failed to initiate payment. Please try again.");
      toast.error(err.message || "Could not initiate payment");
    }
  };

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
                    disabled={!canRegister || alreadyRegistered}
                    onClick={() => {
                      setPaymentStatus("idle");
                      setPaymentError("");
                      setTransactionId("");
                      setShowPayModal(true);
                    }}
                    className="mt-6 w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:opacity-90"
                  >
                    {alreadyRegistered
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

        <Dialog open={showPayModal} onOpenChange={(open) => {
          if (paymentStatus === "initiating" || paymentStatus === "pending_pin") return;
          setShowPayModal(open);
        }}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-bold">Bootcamp Registration</DialogTitle>
              <DialogDescription>
                To reserve your seat for <strong>{b.title}</strong>, please complete your payment.
              </DialogDescription>
            </DialogHeader>

            {paymentStatus === "idle" && (
              <div className="space-y-6 py-4">
                <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 text-sm text-yellow-600/90 dark:text-yellow-500 flex items-start gap-3">
                  <Wallet className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Secure payment required</span>
                    Mobile money transaction will consume {formatXAF(b.price, b.currency)} immediately to confirm reservation.
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="provider">Mobile Money Network</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentProvider("mtn_momo")}
                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          paymentProvider === "mtn_momo"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-border/80"
                        }`}
                      >
                        <img
                          src="/momo_mtna.png"
                          alt="MTN MoMo"
                          className="h-10 w-auto object-contain"
                        />
                        <span className="font-bold text-sm tracking-wider">MTN MoMo</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentProvider("orange_money")}
                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          paymentProvider === "orange_money"
                            ? "border-orange-500 bg-orange-500/5 text-orange-500"
                            : "border-border hover:border-orange-500/80"
                        }`}
                      >
                        <img
                          src="/Orange-Money-logo.png"
                          alt="Orange Money"
                          className="h-10 w-auto object-contain"
                        />
                        <span className="font-bold text-sm tracking-wider">Orange Money</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Money Number</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-sm text-muted-foreground font-semibold">+237</span>
                      <Input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="670000000"
                        className="pl-14 rounded-xl h-11 text-base font-medium tracking-wide"
                        maxLength={9}
                      />
                    </div>
                    <p className="text-[11px] text-muted-foreground">Enter 9 digits Cameroon number (e.g. 6xxxxxxxx).</p>
                  </div>
                </div>

                <Button
                  onClick={handleInitiatePayment}
                  className="w-full bg-brand-gradient hover:opacity-95 text-white font-semibold rounded-xl h-12 text-sm shadow-md"
                >
                  Pay {formatXAF(b.price, b.currency)} & Register
                </Button>
              </div>
            )}

            {paymentStatus === "initiating" && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
                <p className="mt-4 font-semibold text-lg animate-pulse">Initializing Payment...</p>
                <p className="mt-1 text-sm text-muted-foreground max-w-[280px]">Contacting payment gateway. Please hold on.</p>
              </div>
            )}

            {paymentStatus === "pending_pin" && (
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                <div className="relative flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full border-4 border-primary border-t-transparent animate-spin flex items-center justify-center" />
                  <Loader2 className="h-6 w-6 absolute text-primary animate-pulse" />
                </div>
                <div>
                  <p className="font-bold text-lg">Check Your Phone!</p>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[300px]">
                    We've sent a Mobile Money payment prompt to <strong>+237 {phoneNumber}</strong>.
                  </p>
                  <p className="mt-3 text-xs font-semibold px-4 py-2 border rounded-full bg-secondary bg-opacity-40 inline-block text-secondary-foreground">
                    Ref ID: {transactionId || "..."}
                  </p>
                </div>
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-xs text-primary max-w-[320px] text-left">
                  <span className="font-semibold block mb-0.5">Prompt Not Showing?</span>
                  Dial MTN <strong>*126#</strong> or Orange <strong>#150#</strong> to authorize pending transactions if the push alert does not appear automatically.
                </div>
              </div>
            )}

            {paymentStatus === "success" && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                  <CheckCircle2 className="h-10 w-10 text-green-500 animate-bounce" />
                </div>
                <div>
                  <p className="font-bold text-xl text-green-600 dark:text-green-500">Payment Confirmed!</p>
                  <p className="mt-2 text-sm text-muted-foreground">Your seat has been reserved and your registration is confirmed.</p>
                  <p className="mt-1 text-xs text-muted-foreground">Redirecting you to dashboard...</p>
                </div>
              </div>
            )}

            {paymentStatus === "failed" && (
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-5">
                <div className="h-14 w-14 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
                  <span className="text-red-500 text-3xl font-extrabold">!</span>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-lg text-red-500">Payment Failed</p>
                  <p className="text-sm text-muted-foreground max-w-[280px]">
                    {paymentError}
                  </p>
                </div>
                <div className="flex w-full gap-3 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowPayModal(false)}
                    className="flex-1 rounded-xl"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => setPaymentStatus("idle")}
                    className="flex-1 bg-brand-gradient text-white rounded-xl"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
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
