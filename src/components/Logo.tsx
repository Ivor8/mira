export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/logo.jpeg"
      alt="Mira Edge Academy logo"
      className={className}
      loading="lazy"
    />
  );
}
