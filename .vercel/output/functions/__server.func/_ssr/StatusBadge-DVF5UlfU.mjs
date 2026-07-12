import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn } from "./button-BpE9Czok.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatusBadge-DVF5UlfU.js
var import_jsx_runtime = require_jsx_runtime();
var STYLES = {
	draft: "bg-muted text-muted-foreground",
	published: "bg-primary/10 text-primary",
	closed: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
	archived: "bg-muted text-muted-foreground",
	reserved: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
	confirmed: "bg-primary/10 text-primary",
	cancelled: "bg-destructive/10 text-destructive",
	completed: "bg-green-500/10 text-green-700 dark:text-green-400",
	pending: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
	successful: "bg-green-500/10 text-green-700 dark:text-green-400",
	failed: "bg-destructive/10 text-destructive",
	refunded: "bg-muted text-muted-foreground",
	scheduled: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
	live: "bg-green-500/10 text-green-700 dark:text-green-400",
	open: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
	resolved: "bg-green-500/10 text-green-700 dark:text-green-400",
	info: "bg-primary/10 text-primary"
};
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", STYLES[status] ?? "bg-muted text-muted-foreground"),
		children: status.replace(/_/g, " ")
	});
}
//#endregion
export { StatusBadge as t };
