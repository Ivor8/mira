import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Bpb16ABY.js
var $$splitComponentImporter = () => import("./auth-nq8F1ijo.mjs");
var searchSchema = objectType({ next: stringType().optional() });
var Route = createFileRoute("/auth")({
	validateSearch: (s) => searchSchema.parse(s),
	head: () => ({ meta: [{ title: "Sign in — Mira Edge Academy" }, {
		name: "description",
		content: "Sign in or create your Mira Edge Academy account."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
