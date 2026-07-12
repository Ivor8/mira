import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { A as ExternalLink, i as Video } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.sessions-CGYOxW4O.js
var import_jsx_runtime = require_jsx_runtime();
function StudentSessions() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const { data: sessions, isLoading } = useQuery({
		queryKey: ["student-sessions", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("sessions").select("*, bootcamp:bootcamps(title, slug)").order("session_date", { ascending: true }).order("start_time", { ascending: true });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: attendance } = useQuery({
		queryKey: ["my-attendance", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data } = await supabase.from("attendance").select("session_id").eq("student_id", user.id);
			return new Set((data ?? []).map((a) => a.session_id));
		}
	});
	const joinMutation = useMutation({
		mutationFn: async (session) => {
			const { error } = await supabase.from("attendance").insert({
				session_id: session.id,
				student_id: user.id,
				bootcamp_id: session.bootcamp_id,
				browser: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 200) : null
			});
			if (error && error.code !== "23505") throw error;
			window.open(session.meet_url, "_blank", "noopener,noreferrer");
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["my-attendance"] });
			toast.success("Attendance recorded — opening live class");
		},
		onError: (e) => toast.error(e.message)
	});
	const upcoming = (sessions ?? []).filter((s) => s.session_date >= (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const past = (sessions ?? []).filter((s) => s.session_date < (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Live sessions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Join Google Meet classes for your enrolled bootcamps."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (sessions ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No sessions scheduled yet for your bootcamps."
			}),
			upcoming.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Upcoming"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: upcoming.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						session: s,
						attended: attendance?.has(s.id),
						onJoin: () => joinMutation.mutate(s),
						busy: joinMutation.isPending
					}, s.id))
				})]
			}),
			past.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Past sessions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: past.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						session: s,
						attended: attendance?.has(s.id),
						past: true
					}, s.id))
				})]
			})
		]
	});
}
function SessionRow({ session: s, attended, onJoin, busy, past }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-elevated flex flex-wrap items-center justify-between gap-4 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: s.bootcamp?.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						format(new Date(s.session_date), "PPP"),
						" · ",
						s.start_time?.slice(0, 5),
						" – ",
						s.end_time?.slice(0, 5)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: s.status }), attended && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: "completed" })]
				})
			] })]
		}), !past && onJoin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: onJoin,
			disabled: busy,
			className: "rounded-full bg-brand-gradient text-white",
			children: ["Join class ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-4 w-4" })]
		})]
	});
}
//#endregion
export { StudentSessions as component };
