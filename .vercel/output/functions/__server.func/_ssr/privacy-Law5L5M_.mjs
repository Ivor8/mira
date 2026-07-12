import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as SiteFooter, r as SiteHeader } from "./SiteFooter-B8AmoCCx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-Law5L5M_.js
var import_jsx_runtime = require_jsx_runtime();
function Legal({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-bold sm:text-5xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 whitespace-pre-wrap leading-relaxed text-muted-foreground",
					children: body
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legal, {
	title: "Privacy Policy",
	body: "Mira Edge Academy respects your privacy. We collect only the information necessary to deliver our services — your name, email, phone (optional), and payment records — and we never sell personal data. For any questions, contact info@miraedge.tech."
});
//#endregion
export { SplitComponent as component };
