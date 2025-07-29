import { neon } from "@neondatabase/serverless";
import { ShoppingCart } from "lucide-react";

import { PageContainer, SectionContainer } from "@/components/layout/containers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default async function TestProductsPage() {
  const sql = neon(process.env.DATABASE_URL!);

  const products = await sql`select * from producto;`;
  console.log("Products fetched:", products);

  return (
    <PageContainer>
      <SectionContainer>
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Productos de Prueba</h1>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <TestProductCard
              key={product.id_producto}
              id={product.id_producto}
              name={product.nombre}
              description={product.descripcion}
              price={product.precio}
              stock={product.stock}
              categoryId={product.categoria_id}
              status={product.activo}
              createdAt={product.fecha_creacion}
            />
          ))}
        </ul>
      </SectionContainer>
    </PageContainer>
  );
}

function TestProductCard({
  id,
  name,
  description,
  categoryId,
  status,
  price,
  stock,
  createdAt
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  status: boolean;
  createdAt: Date;
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Id producto: {id}</p>
        <p>Descripción: {description}</p>
        <p>Id categoria: {categoryId}</p>
        <p>Activo: {status ? "Sí" : "No"}</p>
        <p>
          Precio: $
          {price.toLocaleString("es-CL", {
            currency: "CLP",
            style: "currency"
          })}
        </p>
        <p>Stock: {stock}</p>
        <p>Fecha de creación: {createdAt.toLocaleDateString("es-CL")}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full bg-color1 hover:bg-color2">
          <ShoppingCart className="size-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
