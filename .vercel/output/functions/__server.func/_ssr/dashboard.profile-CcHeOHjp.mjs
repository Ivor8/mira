import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.profile-CcHeOHjp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudentProfile() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const { data: profile, isLoading } = useQuery({
		queryKey: ["my-profile", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();
			if (error) throw error;
			return data;
		}
	});
	const [form, setForm] = (0, import_react.useState)(null);
	const values = form ?? {
		full_name: profile?.full_name ?? "",
		phone: profile?.phone ?? "",
		bio: profile?.bio ?? "",
		avatar_url: profile?.avatar_url ?? ""
	};
	const save = useMutation({
		mutationFn: async () => {
			const { error } = await supabase.from("profiles").update({
				full_name: values.full_name.trim() || null,
				phone: values.phone.trim() || null,
				bio: values.bio.trim() || null,
				avatar_url: values.avatar_url.trim() || null
			}).eq("id", user.id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Profile updated");
			setForm(null);
			qc.invalidateQueries({ queryKey: ["my-profile"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const set = (key, v) => setForm((prev) => ({
		...prev ?? values,
		[key]: v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Manage your account details."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					save.mutate();
				},
				className: "card-elevated mt-8 max-w-xl space-y-4 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: user?.email ?? "",
						disabled: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "full_name",
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "full_name",
						value: values.full_name,
						onChange: (e) => set("full_name", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						value: values.phone,
						onChange: (e) => set("phone", e.target.value),
						placeholder: "+237…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "avatar",
						children: "Avatar URL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "avatar",
						value: values.avatar_url,
						onChange: (e) => set("avatar_url", e.target.value),
						placeholder: "https://…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "bio",
						children: "Bio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "bio",
						rows: 4,
						value: values.bio,
						onChange: (e) => set("bio", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: save.isPending,
						className: "rounded-full bg-brand-gradient text-white",
						children: save.isPending ? "Saving…" : "Save profile"
					})
				]
			})
		]
	});
}
//#endregion
export { StudentProfile as component };
