import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function PageContainer({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("px-4 py-12", className)} {...props}>
      {children}
    </div>
  );
}

export function SectionContainer({ children, className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("mx-auto max-w-2xl", className)} {...props}>
      {children}
    </section>
  );
}
