import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";

export const Route = createFileRoute("/_authenticated/dashboard/profile")({
  component: StudentProfile,
});

function StudentProfile() {
  const { user } = useAuthUser();
  const qc = useQueryClient();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["my-profile", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", user!.id).single();
      if (error) throw error;
      return data;
    },
  });

  const [form, setForm] = useState<{ full_name: string; phone: string; bio: string; avatar_url: string } | null>(null);
  const values = form ?? {
    full_name: profile?.full_name ?? "",
    phone: profile?.phone ?? "",
    bio: profile?.bio ?? "",
    avatar_url: profile?.avatar_url ?? "",
  };

  const save = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: values.full_name.trim() || null,
          phone: values.phone.trim() || null,
          bio: values.bio.trim() || null,
          avatar_url: values.avatar_url.trim() || null,
        })
        .eq("id", user!.id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Profile updated");
      setForm(null);
      qc.invalidateQueries({ queryKey: ["my-profile"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const set = (key: keyof typeof values, v: string) =>
    setForm((prev) => ({ ...(prev ?? values), [key]: v }));

  return (
    <AppShell mode="student">
      <h1 className="font-display text-3xl font-bold">Profile</h1>
      <p className="mt-1 text-muted-foreground">Manage your account details.</p>

      {isLoading && <p className="mt-8 text-muted-foreground">Loading…</p>}

      {!isLoading && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            save.mutate();
          }}
          className="card-elevated mt-8 max-w-xl space-y-4 p-6"
        >
          <div>
            <Label>Email</Label>
            <Input value={user?.email ?? ""} disabled />
          </div>
          <div>
            <Label htmlFor="full_name">Full name</Label>
            <Input id="full_name" value={values.full_name} onChange={(e) => set("full_name", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={values.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+237…" />
          </div>
          <div>
            <Label htmlFor="avatar">Avatar URL</Label>
            <Input id="avatar" value={values.avatar_url} onChange={(e) => set("avatar_url", e.target.value)} placeholder="https://…" />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" rows={4} value={values.bio} onChange={(e) => set("bio", e.target.value)} />
          </div>
          <Button type="submit" disabled={save.isPending} className="rounded-full bg-brand-gradient text-white">
            {save.isPending ? "Saving…" : "Save profile"}
          </Button>
        </form>
      )}
    </AppShell>
  );
}
