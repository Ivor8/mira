export function formatXAF(amount: number | string, currency = "XAF") {
  const n = typeof amount === "string" ? Number(amount) : amount;
  if (!Number.isFinite(n)) return `${currency} 0`;
  return `${currency} ${new Intl.NumberFormat("en-US").format(Math.round(n))}`;
}

export function daysUntil(date?: string | null) {
  if (!date) return null;
  const d = new Date(date);
  const ms = d.getTime() - Date.now();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}
