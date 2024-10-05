export function SimpleBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex gap-2 rounded-2xl border border-white/20 bg-[#0000004d] px-4 py-1 shadow-sm backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
