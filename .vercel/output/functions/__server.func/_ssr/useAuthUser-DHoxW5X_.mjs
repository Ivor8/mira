import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useAuthUser-DHoxW5X_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useAuthUser() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [roles, setRoles] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		const load = async (u) => {
			if (!u) {
				if (mounted) {
					setUser(null);
					setRoles([]);
					setLoading(false);
				}
				return;
			}
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", u.id);
			if (!mounted) return;
			setUser(u);
			setRoles((data ?? []).map((r) => r.role));
			setLoading(false);
		};
		supabase.auth.getUser().then(({ data }) => load(data.user));
		const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
			load(session?.user ?? null);
		});
		return () => {
			mounted = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	return {
		user,
		roles,
		isAdmin: roles.includes("admin") || roles.includes("super_admin"),
		loading
	};
}
//#endregion
export { useAuthUser as t };
