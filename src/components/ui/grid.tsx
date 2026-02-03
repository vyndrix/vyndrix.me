import { cn } from "@/lib/utils";

export function Grid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-16 sm:grid-cols-2 gap-4", className)}>
      {children}
    </div>
  );
}
