import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function BrandLogo({ textClassName }: { textClassName?: string }) {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/nutri-data-logo-next.png" width={80} height={80} alt="Picture of the author" />
      <div>
        <h1 className={cn("text-2xl font-bold text-gray-900", textClassName)}>NutriData</h1>
      </div>
    </Link>
  );
}
