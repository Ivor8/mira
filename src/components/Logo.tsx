export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-brand-gradient animate-gradient" />
      <div className="absolute inset-[2px] rounded-[10px] bg-background/80 backdrop-blur" />
      <svg viewBox="0 0 32 32" className="relative h-full w-full p-1.5 text-primary" fill="none">
        <path d="M4 26 V10 L10 18 L16 10 V26" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 26 V10 H28 M20 18 H26 M20 26 H28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
