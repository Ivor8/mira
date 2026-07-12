import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as Outlet, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as SiteFooter, r as SiteHeader } from "./SiteFooter-B8AmoCCx.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as BootcampCard } from "./routes-BGxe_4wa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bootcamps-B_0asNQp.js
var import_jsx_runtime = require_jsx_runtime();
function BootcampsPage() {
	if (!(useRouterState({ select: (s) => s.location.pathname }) === "/bootcamps")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	const { data, isLoading } = useQuery({
		queryKey: ["bootcamps-all"],
		queryFn: async () => {
			const { data, error } = await supabase.from("bootcamps").select("*").in("status", ["published", "closed"]).order("start_date", { ascending: true });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Bootcamps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
							children: "All cohorts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Live, cohort-based programs designed to make you a shipping full-stack engineer."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: [
						isLoading && Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 animate-pulse rounded-3xl bg-muted/40" }, i)),
						!isLoading && (data ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-full card-elevated py-20 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold",
								children: "No bootcamps published yet"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Check back soon — new cohorts are added regularly."
							})]
						}),
						(data ?? []).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootcampCard, { b }, b.id))
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { BootcampsPage as component };
