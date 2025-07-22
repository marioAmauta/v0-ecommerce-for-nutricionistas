import { LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import { Card, CardContent } from "./ui/card";

export function CategoryCard({
  category
}: {
  category: {
    name: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    count: number;
    image: string;
    url: string;
  };
}) {
  return (
    <Link href={category.url}>
      <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
        <CardContent className="p-6">
          <div className="relative mb-4">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={300}
              height={200}
              className="h-32 w-full rounded-lg object-cover"
            />
            <div className="bg-color1/20 group-hover:bg-color1/30 absolute inset-0 rounded-lg transition-colors" />
          </div>
          <div className="mb-2 flex items-center">
            <category.icon className="mr-2 h-6 w-6 text-color1" />
            <h3 className="font-semibold text-gray-900">{category.name}</h3>
          </div>
          <p className="text-sm text-gray-600">{category.count} productos</p>
        </CardContent>
      </Card>
    </Link>
  );
}
