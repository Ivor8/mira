import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { formatXAF } from "@/lib/format";
import { format } from "date-fns";
import { Download } from "lucide-react";

export type ReceiptPayment = {
  id: string;
  amount: number;
  currency: string;
  provider: string;
  status: string;
  phone_number?: string | null;
  transaction_ref?: string | null;
  created_at: string;
  bootcamp?: { title: string } | null;
};

interface Props {
  payment: ReceiptPayment | null;
  studentName?: string;
  onClose: () => void;
}

export function PaymentReceiptModal({ payment, studentName, onClose }: Props) {
  if (!payment) return null;

  const logoUrl = `${window.location.origin}/logo.jpeg`;

  const handleDownload = () => {
    const receiptHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Payment Receipt — Mira Edge Academy</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; color: #111; }
    .header { text-align: center; border-bottom: 2px solid #6366f1; padding-bottom: 16px; margin-bottom: 24px; }
    .header img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; margin-bottom: 10px; }
    .header h1 { margin: 0; font-size: 22px; color: #6366f1; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #666; }
    .badge { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; background: ${payment.status === "successful" ? "#dcfce7" : payment.status === "pending" ? "#fef9c3" : "#fee2e2"}; color: ${payment.status === "successful" ? "#166534" : payment.status === "pending" ? "#854d0e" : "#991b1b"}; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; }
    td:first-child { color: #6b7280; width: 45%; }
    td:last-child { font-weight: 600; }
    .footer { margin-top: 32px; text-align: center; font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="header">
    <img src="${logoUrl}" alt="Mira Edge Academy" />
    <h1>Mira Edge Academy</h1>
    <p>Payment Receipt</p>
  </div>
  <table>
    <tr><td>Receipt ID</td><td>${payment.id}</td></tr>
    <tr><td>Student</td><td>${studentName ?? "—"}</td></tr>
    <tr><td>Bootcamp</td><td>${payment.bootcamp?.title ?? "—"}</td></tr>
    <tr><td>Amount</td><td>${formatXAF(payment.amount, payment.currency)}</td></tr>
    <tr><td>Provider</td><td>${payment.provider.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</td></tr>
    <tr><td>Phone</td><td>${payment.phone_number ?? "—"}</td></tr>
    <tr><td>Transaction Ref</td><td>${payment.transaction_ref ?? "—"}</td></tr>
    <tr><td>Status</td><td><span class="badge">${payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}</span></td></tr>
    <tr><td>Date</td><td>${format(new Date(payment.created_at), "PPPp")}</td></tr>
  </table>
  <div class="footer">Thank you for choosing Mira Edge Academy. This is an official payment receipt.</div>
</body>
</html>`;

    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(receiptHtml);
    win.document.close();
    win.focus();
    win.print();
  };

  return (
    <Dialog open={!!payment} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Mira Edge Academy" className="h-10 w-10 rounded-full object-cover" />
            <DialogTitle className="font-display text-xl font-bold">Payment Receipt</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-3 py-2 text-sm">
          <Row label="Receipt ID" value={<span className="font-mono text-xs break-all">{payment.id}</span>} />
          <Row label="Bootcamp" value={payment.bootcamp?.title ?? "—"} />
          <Row label="Amount" value={<span className="font-bold text-base">{formatXAF(payment.amount, payment.currency)}</span>} />
          <Row label="Provider" value={payment.provider.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} />
          {payment.phone_number && <Row label="Phone" value={payment.phone_number} />}
          {payment.transaction_ref && <Row label="Transaction Ref" value={<span className="font-mono text-xs">{payment.transaction_ref}</span>} />}
          <Row label="Status" value={<StatusBadge status={payment.status} />} />
          <Row label="Date" value={format(new Date(payment.created_at), "PPPp")} />
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" onClick={onClose} className="flex-1 rounded-full">Close</Button>
          <Button onClick={handleDownload} className="flex-1 rounded-full bg-brand-gradient text-white">
            <Download className="mr-2 h-4 w-4" /> Download Receipt
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-2">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}
