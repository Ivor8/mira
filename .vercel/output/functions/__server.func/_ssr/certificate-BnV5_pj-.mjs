import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certificate-BnV5_pj-.js
var $$splitComponentImporter = () => import("./certificate-DTNbvDxz.mjs");
var Route = createFileRoute("/certificate")({
	validateSearch: (search) => ({ code: typeof search.code === "string" ? search.code : "" }),
	head: () => ({ meta: [{ title: "Verify certificate — Mira Edge Academy" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
