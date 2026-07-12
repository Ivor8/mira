import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { n as formatXAF } from "./format-LeLbyl3U.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.bootcamps-RpDGi5aL.js
var import_jsx_runtime = require_jsx_runtime();
function MyBootcamps() {
	const { user } = useAuthUser();
	const { data: regs, isLoading } = useQuery({
		queryKey: ["my-regs", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("registrations").select("*, bootcamp:bootcamps(*)").eq("student_id", user.id).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "My bootcamps"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: "All bootcamps you are enrolled in."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bootcamps",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "rounded-full bg-brand-gradient text-white",
						children: "Browse bootcamps"
					})
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (regs ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "You have not enrolled in any bootcamps yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: (regs ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: r.bootcamp?.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground line-clamp-2",
								children: r.bootcamp?.short_description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Payment: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.payment_status })] }),
								r.bootcamp?.start_date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Starts ", format(new Date(r.bootcamp.start_date), "PP")] }),
								r.bootcamp?.price != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatXAF(r.bootcamp.price, r.bootcamp.currency) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bootcamps/$slug",
								params: { slug: r.bootcamp?.slug ?? "" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									size: "sm",
									className: "rounded-full",
									children: "View details"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard/sessions",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "rounded-full",
									children: "Sessions"
								})
							})]
						})
					]
				}, r.id))
			})
		]
	});
}
//#endregion
export { MyBootcamps as component };
