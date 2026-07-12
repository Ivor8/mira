import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Clock, U as Calendar } from "../_libs/lucide-react.mjs";
import { n as formatXAF, t as daysUntil } from "./format-LeLbyl3U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGxe_4wa.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./routes-DMdC2udT.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function BootcampCard({ b }) {
	const remaining = Math.max((b.max_seats ?? 0) - (b.seats_taken ?? 0), 0);
	const dLeft = daysUntil(b.registration_deadline);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: `/bootcamps/${b.slug}`,
		className: "group card-elevated flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:glow-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-52 overflow-hidden bg-slate-950/5",
			children: [b.cover_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: b.cover_image_url,
				alt: "",
				className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-black/30 px-2 py-1 backdrop-blur",
					children: [b.duration_weeks ?? 8, " weeks"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-black/30 px-2 py-1 backdrop-blur",
					children: [remaining, " seats left"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold group-hover:text-brand-gradient",
					children: b.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
					children: b.short_description ?? b.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							b.start_date ?? "TBA"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							dLeft != null ? dLeft > 0 ? `${dLeft}d to register` : "Closed" : "Open"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 border-t border-border/50 pt-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-bold text-brand-gradient",
						children: formatXAF(b.price, b.currency)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition group-hover:bg-primary/10",
						children: "View details"
					})]
				})
			]
		})]
	});
}
//#endregion
export { Route as n, BootcampCard as t };
