import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export function CategoryCard({
  category
}: {
  category: {
    name: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    count: number;
    image: string;
    url: string;
  }[];
}) {
  return (
    <Link href={category.url}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
        <CardContent className="p-6">
          <div className="relative mb-4">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={300}
              height={200}
              className="rounded-lg w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-color1/20 rounded-lg group-hover:bg-color1/30 transition-colors" />
          </div>
          <div className="flex items-center mb-2">
            <category.icon className="h-6 w-6 text-color1 mr-2" />
            <h3 className="font-semibold text-gray-900">{category.name}</h3>
          </div>
          <p className="text-sm text-gray-600">{category.count} productos</p>
        </CardContent>
      </Card>
    </Link>
  );
}
