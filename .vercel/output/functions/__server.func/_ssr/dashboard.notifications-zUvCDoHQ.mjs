import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { W as Bell } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.notifications-zUvCDoHQ.js
var import_jsx_runtime = require_jsx_runtime();
function StudentNotifications() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const { data: notifications, isLoading } = useQuery({
		queryKey: ["my-notifications", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("notifications").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const markRead = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("notifications").update({ read_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["my-notifications"] }),
		onError: (e) => toast.error(e.message)
	});
	const markAllRead = useMutation({
		mutationFn: async () => {
			const unread = (notifications ?? []).filter((n) => !n.read_at);
			await Promise.all(unread.map((n) => supabase.from("notifications").update({ read_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", n.id)));
		},
		onSuccess: () => {
			toast.success("All notifications marked as read");
			qc.invalidateQueries({ queryKey: ["my-notifications"] });
		}
	});
	const unreadCount = (notifications ?? []).filter((n) => !n.read_at).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up."
				})] }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "rounded-full",
					onClick: () => markAllRead.mutate(),
					children: "Mark all read"
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (notifications ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No notifications yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-3",
				children: (notifications ?? []).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `card-elevated flex items-start gap-4 p-5 ${!n.read_at ? "border-primary/30" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: n.title
								}),
								n.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: n.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: format(new Date(n.created_at), "PPp")
								}),
								n.link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: n.link,
									className: "mt-2 inline-block text-sm text-primary hover:underline",
									children: "Open link →"
								})
							]
						}),
						!n.read_at && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: "rounded-full shrink-0",
							onClick: () => markRead.mutate(n.id),
							children: "Mark read"
						})
					]
				}, n.id))
			})
		]
	});
}
//#endregion
export { StudentNotifications as component };
