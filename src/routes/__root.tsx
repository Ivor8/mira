import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-8xl font-bold text-brand-gradient">404</p>
        <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30 transition hover:opacity-90">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/30"
          >Try again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

const TITLE = "Mira Edge Academy — Live Full-Stack & AI Bootcamps";
const DESCRIPTION = "Become a professional full-stack developer with live instructor-led bootcamps in modern web technologies and AI-assisted development. Real projects, official certificates, career-ready skills.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "Mira Edge Technologies" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@MiraEdge" },
      { name: "twitter:image", content: "/logo.jpeg" },
      { name: "theme-color", content: "#0b1230" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.jpeg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/logo.jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function shouldShowFloatingContact(pathname: string) {
  if (!pathname) return false;
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api") || pathname.includes("/_authenticated")) return false;
  return true;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const location = useLocation();
  const showFloatingContact = shouldShowFloatingContact(location.pathname);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      router.invalidate();
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });
    return () => sub.subscription.unsubscribe();
  }, [router, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      {showFloatingContact && (
        <a
          href="https://wa.me/237676514428?text=Hello%20Mira%20Edge%20Academy%2C%20I%20would%20like%20to%20talk%20to%20a%20team%20member."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:scale-105 hover:bg-[#1ebe57]"
        >
          <FaWhatsapp className="h-5 w-5" />
          <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:max-w-[120px] group-hover:opacity-100">
            Contact us
          </span>
        </a>
      )}
      <Toaster />
    </QueryClientProvider>
  );
}
