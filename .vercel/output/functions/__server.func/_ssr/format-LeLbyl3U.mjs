//#region node_modules/.nitro/vite/services/ssr/assets/format-LeLbyl3U.js
function formatXAF(amount, currency = "XAF") {
	const n = typeof amount === "string" ? Number(amount) : amount;
	if (!Number.isFinite(n)) return `${currency} 0`;
	return `${currency} ${new Intl.NumberFormat("en-US").format(Math.round(n))}`;
}
function daysUntil(date) {
	if (!date) return null;
	const ms = new Date(date).getTime() - Date.now();
	return Math.ceil(ms / (1e3 * 60 * 60 * 24));
}
//#endregion
export { formatXAF as n, daysUntil as t };
