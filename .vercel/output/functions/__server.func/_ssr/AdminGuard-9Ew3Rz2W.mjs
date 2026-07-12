import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminGuard-9Ew3Rz2W.js
var import_jsx_runtime = require_jsx_runtime();
function AdminGuard({ children }) {
	const { isAdmin, loading } = useAuthUser();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		mode: "admin",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Loading…"
		})
	});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		mode: "student",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-elevated p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Admins only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Your account does not have admin permissions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					className: "mt-4 inline-block text-primary hover:underline",
					children: "Back to dashboard"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { AdminGuard as t };
