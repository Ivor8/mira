import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { BRAND } from "@/lib/brand";
import { Github, Mail, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="h-10 w-10" />
              <div>
                <p className="font-display text-lg font-bold">Mira Edge Academy</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{BRAND.tagline}</p>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A premium online academy training the next generation of full-stack developers with modern
              technologies, AI-assisted workflows, and real-world projects.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              Powered by <a href={BRAND.website} className="text-foreground underline-offset-4 hover:underline">{BRAND.poweredBy}</a>
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/bootcamps" className="hover:text-foreground">Bootcamps</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/certificate" className="hover:text-foreground">Verify certificate</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Support</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/support" className="hover:text-foreground">Help center</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href={BRAND.whatsappUrl} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground" aria-label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={`mailto:${BRAND.email}`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a href={BRAND.website} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground" aria-label="Website">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Mira Edge Academy. All rights reserved.</p>
          <p>Official certificates awarded on completion.</p>
        </div>
      </div>
    </footer>
  );
}
