import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import { Eye, EyeOff, ArrowLeft, CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Logo } from "@/components/Logo";

const searchSchema = z.object({ next: z.string().optional(), mode: z.enum(["signin", "signup", "verified"]).optional(), email: z.string().optional() });

function getAppOrigin() {
  if (typeof window !== "undefined" && window.location?.origin) return window.location.origin;
  if (import.meta.env.VITE_APP_URL) return import.meta.env.VITE_APP_URL;
  if (import.meta.env.VITE_SITE_URL) return import.meta.env.VITE_SITE_URL;
  return "https://miraedge-academy.com";
}

function buildAuthCallbackUrl(mode: "verified" | "reset", email?: string, next = "/dashboard") {
  const origin = getAppOrigin();
  // Construct the callback URL WITHOUT pre-encoding the email so the Supabase
  // client will perform a single encoding when sending the redirect_to param.
  const params = [] as string[];
  params.push(`mode=${mode === "verified" ? "verified" : "reset"}`);
  if (email) params.push(`email=${email}`);
  if (next) params.push(`next=${next}`);
  return `${origin}/auth?${params.join("&")}`;
}

export const Route = createFileRoute("/auth")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({ meta: [{ title: "Sign in — Mira Edge Academy" }, { name: "description", content: "Sign in or create your Mira Edge Academy account." }] }),
  component: AuthPage,
});

function AuthPage() {
  const { next, mode, email: emailFromQuery } = Route.useSearch();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [view, setView] = useState<"form" | "signup-success" | "verified-success">("form");
  const [pendingEmail, setPendingEmail] = useState("");

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const hashHasSession = hash.includes("access_token") || hash.includes("refresh_token");

    if (mode === "verified" || hashHasSession) {
      setView("verified-success");
      setTab("signin");
      if (emailFromQuery) setPendingEmail(emailFromQuery);
      return;
    }

    setView("form");
  }, [emailFromQuery, mode]);

  useEffect(() => {
    if (mode === "verified") return;
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: (next ?? "/dashboard") as any });
    });
  }, [mode, next, navigate]);

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-30" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl animate-gradient" />

      <Link to="/" className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back home
      </Link>

      <div className="relative flex min-h-screen items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="mb-8 flex flex-col items-center text-center">
            <Logo className="h-14 w-14" />
            <h1 className="mt-4 font-display text-3xl font-bold">Welcome to Mira Edge</h1>
            <p className="mt-1 text-sm text-muted-foreground">Learn. Build. Innovate. Lead.</p>
          </div>

          <div className="card-elevated p-6 backdrop-blur">
            {view === "form" ? (
              <Tabs value={tab} onValueChange={(v) => setTab(v as any)}>
                <TabsList className="grid w-full grid-cols-2 rounded-full">
                  <TabsTrigger value="signin" className="rounded-full">Sign in</TabsTrigger>
                  <TabsTrigger value="signup" className="rounded-full">Create account</TabsTrigger>
                </TabsList>
                <TabsContent value="signin" className="mt-6">
                  <SignInForm onDone={() => navigate({ to: (next ?? "/dashboard") as any })} />
                </TabsContent>
                <TabsContent value="signup" className="mt-6">
                  <SignUpForm
                    next={next}
                    onDone={(email) => {
                      setPendingEmail(email);
                      setView("signup-success");
                      setTab("signin");
                    }}
                  />
                </TabsContent>
              </Tabs>
            ) : (
              <div className="space-y-4">
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
                    {view === "signup-success" ? <Mail className="h-6 w-6 text-emerald-600" /> : <CheckCircle2 className="h-6 w-6 text-emerald-600" />}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">
                    {view === "signup-success" ? "Account created successfully" : "Email verified successfully"}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {view === "signup-success"
                      ? `We sent a verification link to ${pendingEmail || "your email"}. Please open it, then return here to sign in.`
                      : "Your email address is now verified. You can continue to the sign in page and access your account."}
                  </p>
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    setView("form");
                    setTab("signin");
                  }}
                  className="w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30"
                >
                  Proceed to sign in <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PasswordInput({ value, onChange, id }: { value: string; onChange: (v: string) => void; id: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input id={id} type={show ? "text" : "password"} value={value} onChange={(e) => onChange(e.target.value)} required minLength={6} />
      <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

function SignInForm({ onDone }: { onDone: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Welcome back!");
    onDone();
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div><Label htmlFor="si-email">Email</Label><Input id="si-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></div>
      <div>
        <div className="flex items-center justify-between"><Label htmlFor="si-pass">Password</Label>
          <Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot?</Link>
        </div>
        <PasswordInput id="si-pass" value={password} onChange={setPassword} />
      </div>
      <Button type="submit" disabled={busy} className="w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30">
        {busy ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}

function SignUpForm({ onDone, next }: { onDone: (email: string) => void; next?: string }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const normalizedEmail = email.trim().toLowerCase();
    const redirectTo = buildAuthCallbackUrl("verified", normalizedEmail, next ?? "/dashboard");
    console.log("SignUp redirectTo:", redirectTo);
    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        emailRedirectTo: redirectTo,
        data: { full_name: fullName, phone },
      },
    });
    setBusy(false);
    if (error) {
      console.error("Sign up error:", error);
      const rateLimit = /rate limit/i.test(error.message || "");
      const userMessage = rateLimit
        ? "Too many verification emails sent recently. Please wait a few minutes and try again."
        : error.message || "Failed to create account. Try again later.";
      return toast.error(userMessage);
    }
    if (data?.user && !data?.session) {
      toast.success("Check your inbox to verify your email.");
      onDone(normalizedEmail);
      return;
    }
    toast.success("Account created successfully.");
    onDone(normalizedEmail);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div><Label htmlFor="su-name">Full name</Label><Input id="su-name" value={fullName} onChange={(e) => setFullName(e.target.value)} required maxLength={80} /></div>
      <div><Label htmlFor="su-email">Email</Label><Input id="su-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></div>
      <div><Label htmlFor="su-phone">Phone (optional)</Label><Input id="su-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+237…" /></div>
      <div><Label htmlFor="su-pass">Password</Label><PasswordInput id="su-pass" value={password} onChange={setPassword} /></div>
      <Button type="submit" disabled={busy} className="w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30">
        {busy ? "Creating…" : "Create account"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">By continuing you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy</Link>.</p>
    </form>
  );
}
