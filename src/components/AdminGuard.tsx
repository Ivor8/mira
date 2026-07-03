import { Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useAuthUser } from "@/hooks/useAuthUser";
import type { ReactNode } from "react";

export function AdminGuard({ children }: { children: ReactNode }) {
  const { isAdmin, loading } = useAuthUser();
  if (loading) {
    return (
      <AppShell mode="admin">
        <p className="text-muted-foreground">Loading…</p>
      </AppShell>
    );
  }
  if (!isAdmin) {
    return (
      <AppShell mode="student">
        <div className="card-elevated p-10 text-center">
          <h1 className="font-display text-2xl font-bold">Admins only</h1>
          <p className="mt-2 text-muted-foreground">Your account does not have admin permissions.</p>
          <Link to="/dashboard" className="mt-4 inline-block text-primary hover:underline">
            Back to dashboard
          </Link>
        </div>
      </AppShell>
    );
  }
  return <>{children}</>;
}
