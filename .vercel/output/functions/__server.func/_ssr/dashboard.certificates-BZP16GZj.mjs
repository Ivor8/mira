import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ExternalLink, G as Award } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.certificates-BZP16GZj.js
var import_jsx_runtime = require_jsx_runtime();
function StudentCertificates() {
	const { user } = useAuthUser();
	const { data: certs, isLoading } = useQuery({
		queryKey: ["my-certificates", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("certificates").select("*, bootcamp:bootcamps(title, slug)").eq("student_id", user.id).order("issued_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Certificates"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Your earned certificates of completion."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (certs ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No certificates issued yet. Complete a bootcamp to earn one."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: (certs ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-elevated p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold",
								children: c.bootcamp?.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-sm text-primary",
								children: c.certificate_code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: ["Issued ", format(new Date(c.issued_at), "PPP")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/certificate",
								search: { code: c.certificate_code },
								className: "mt-4 inline-block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									className: "rounded-full",
									children: ["Verify & share ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-3 w-3" })]
								})
							})
						] })]
					})
				}, c.id))
			})
		]
	});
}
//#endregion
export { StudentCertificates as component };
