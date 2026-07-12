import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { A as ExternalLink, D as FileText } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.resources-scDbtoMQ.js
var import_jsx_runtime = require_jsx_runtime();
function StudentResources() {
	const { user } = useAuthUser();
	const { data: resources, isLoading } = useQuery({
		queryKey: ["student-resources", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("resources").select("*, bootcamp:bootcamps(title), session:sessions(title)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Resources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Files and materials for your enrolled bootcamps."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (resources ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No resources uploaded yet for your bootcamps."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: (resources ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-elevated p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: r.bootcamp?.title
								}),
								r.session?.title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: ["Session: ", r.session.title]
								}),
								r.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground line-clamp-2",
									children: r.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: format(new Date(r.created_at), "PP")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: r.file_url,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 inline-block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "secondary",
										className: "rounded-full",
										children: ["Open resource ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-3 w-3" })]
									})
								})
							]
						})]
					})
				}, r.id))
			})
		]
	});
}
//#endregion
export { StudentResources as component };
