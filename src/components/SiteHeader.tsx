import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/bootcamps", label: "Bootcamps" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { user, isAdmin } = useAuthUser();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass border-b" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-tight">Mira Edge</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Academy</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
              activeProps={{ className: "text-foreground bg-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:text-foreground md:inline-flex"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {user ? (
            <>
              <Link to={isAdmin ? "/admin" : "/dashboard"} className="hidden md:inline-flex">
                <Button variant="secondary" className="rounded-full">Dashboard</Button>
              </Link>
              <Button
                onClick={async () => { await supabase.auth.signOut(); window.location.href = "/"; }}
                variant="ghost"
                className="hidden rounded-full md:inline-flex"
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth" className="hidden md:inline-flex">
                <Button variant="ghost" className="rounded-full">Sign in</Button>
              </Link>
              <Link to="/bootcamps" className="hidden md:inline-flex">
                <Button className="rounded-full bg-brand-gradient text-white shadow-lg shadow-primary/30 hover:opacity-90">
                  Join Bootcamp
                </Button>
              </Link>
            </>
          )}
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {user ? (
                <Link to={isAdmin ? "/admin" : "/dashboard"} onClick={() => setOpen(false)} className="flex-1">
                  <Button className="w-full rounded-full">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link to="/auth" onClick={() => setOpen(false)} className="flex-1">
                    <Button variant="secondary" className="w-full rounded-full">Sign in</Button>
                  </Link>
                  <Link to="/bootcamps" onClick={() => setOpen(false)} className="flex-1">
                    <Button className="w-full rounded-full bg-brand-gradient text-white">Join</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
