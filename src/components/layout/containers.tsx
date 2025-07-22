import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function PageContainer({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("min-h-screen bg-white", className)} {...props}>
      {children}
    </div>
  );
}
