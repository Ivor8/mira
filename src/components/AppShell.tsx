import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Logo } from "./Logo";
import { LayoutDashboard, User, GraduationCap, Calendar, FileText, CreditCard, Award, Bell, LifeBuoy, LogOut, Menu, X, ShieldCheck } from "lucide-react";
import { useAuthUser } from "@/hooks/useAuthUser";

const STUDENT_NAV = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/bootcamps", label: "My bootcamps", icon: GraduationCap },
  { to: "/dashboard/sessions", label: "Sessions", icon: Calendar },
  { to: "/dashboard/resources", label: "Resources", icon: FileText },
  { to: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { to: "/dashboard/certificates", label: "Certificates", icon: Award },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/profile", label: "Profile", icon: User },
  { to: "/dashboard/support", label: "Support", icon: LifeBuoy },
] as const;

const ADMIN_NAV = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/bootcamps", label: "Bootcamps", icon: GraduationCap },
  { to: "/admin/sessions", label: "Sessions", icon: Calendar },
  { to: "/admin/students", label: "Students", icon: User },
  { to: "/admin/payments", label: "Payments", icon: CreditCard },
] as const;

export function AppShell({ children, mode }: { children: ReactNode; mode: "student" | "admin" }) {
  const [open, setOpen] = useState(false);
  const { user, isAdmin } = useAuthUser();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const nav = mode === "admin" ? ADMIN_NAV : STUDENT_NAV;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-border/60 bg-card/70 backdrop-blur-xl transition-transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="flex h-16 items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-9 w-9" />
            <div>
              <p className="font-display text-sm font-bold">Mira Edge</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{mode === "admin" ? "Admin" : "Academy"}</p>
            </div>
          </Link>
          <button onClick={() => setOpen(false)} className="lg:hidden"><X className="h-5 w-5" /></button>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4">
          {nav.map((n) => {
            const exact = (n as { exact?: boolean }).exact;
            const active = exact ? pathname === n.to : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-brand-gradient text-white shadow-lg shadow-primary/30" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}
              >
                <n.icon className="h-4 w-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute inset-x-3 bottom-4 space-y-2">
          {mode === "student" && isAdmin && (
            <Link to="/admin" className="flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground">
              <ShieldCheck className="h-4 w-4" /> Admin panel
            </Link>
          )}
          {mode === "admin" && (
            <Link to="/dashboard" className="flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground">
              <User className="h-4 w-4" /> Student view
            </Link>
          )}
          <button
            onClick={async () => { await supabase.auth.signOut(); window.location.href = "/"; }}
            className="flex w-full items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
          <div className="rounded-xl bg-muted/40 px-3 py-2 text-xs text-muted-foreground truncate">{user?.email}</div>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl sm:px-6">
          <button onClick={() => setOpen(true)} className="lg:hidden"><Menu className="h-5 w-5" /></button>
          <p className="font-display text-sm font-semibold">{mode === "admin" ? "Admin Panel" : "Student Dashboard"}</p>
          <Link to="/dashboard/notifications" className="rounded-full p-2 text-muted-foreground hover:text-foreground"><Bell className="h-5 w-5" /></Link>
        </header>
        <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          {children}
        </motion.main>
      </div>

      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/40 lg:hidden" />}
    </div>
  );
}
