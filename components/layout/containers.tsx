import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function PageContainer({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("min-h-screen bg-white", className)} {...props}>
      {children}
    </div>
  );
}
