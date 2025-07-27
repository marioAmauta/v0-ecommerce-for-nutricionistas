import { ShoppingCart, Users, Container, Calculator, Ruler, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AppRoutes } from "@/lib/app-routes";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const featuredProducts = [
  {
    id: 1,
    name: "Caliper Harpenden",
    price: 1290000,
    originalPrice: 349.99,
    image: "/Plicometro HARPENDEN.jpg",
    rating: 4.8,
    reviews: 124,
    category: "Equipos de Medición",
    badge: "Más Vendido"
  },
  {
    id: 2,
    name: "Balanza Mecánica",
    price: 599990,
    image: "/Balanza mecanica.png",
    rating: 4.9,
    reviews: 89,
    category: "Equipos de Medición",
    badge: "Nuevo"
  },
  {
    id: 3,
    name: "Balanza Pediátrica Mecánica",
    price: 399990,
    originalPrice: 229.99,
    image: "/Balanza pediatrica.jpg",
    rating: 4.7,
    reviews: 67,
    category: "Equipos de Medición",
    badge: "Oferta"
  },
  {
    id: 4,
    name: "Cinta métrica Lufkin",
    price: 27990,
    image: "/Cinta metrica Lufkin.webp",
    rating: 4.6,
    reviews: 203,
    category: "Equipos de Medición",
    badge: "Oferta"
  }
];

const categories = [
  {
    name: "Equipos de Medición",
    icon: Ruler,
    count: 24,
    countText: "24 productos",
    image: "/equipos medicion.jpg",
    url: "/categoria/equipos-de-medicion"
  },
  {
    name: "Comunidad Nutricional",
    icon: Users,
    count: 5000,
    countText: "5000+ Miembros",
    image: "/comunidad nutricion.png",
    url: "/categoria/cursos-isak"
  },
  {
    name: "Recursos Digitales",
    icon: Calculator,
    count: 45,
    countText: "45 recursos",
    image: "/recursos digitales.webp",
    url: "/categoria/recursos-digitales"
  },
  {
    name: "Box de Atención",
    icon: Container,
    count: 32,
    countText: "32 boxes",
    image: "/box nutricional.jpg",
    url: "/categoria/box-de-atencion"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
                Equipos y Recursos para
                <span className="text-color1"> Nutricionistas</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Todo lo que necesitas para tu práctica profesional: equipos de medición, cursos ISAK, plantillas, libros
                especializados y más.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-color1 hover:bg-color2">
                  Ver Catálogo
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
                <Link
                  href={AppRoutes.loginPage}
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "outline",
                      className: "border-color1 bg-white text-color1 hover:bg-color5"
                    })
                  )}
                >
                  Inicia Sesión
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/imagen principal.jpg"
                alt="Nutricionista profesional"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Categorías Especializadas</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Encuentra exactamente lo que necesitas para tu consulta nutricional
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.url}>
                <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={300}
                        height={200}
                        className={cn(
                          "h-52 w-full rounded-lg object-cover",
                          category.image === "/box nutricional.jpg" ? "object-center" : "object-top"
                        )}
                      />
                      <div className="bg-color1/20 group-hover:bg-color1/30 absolute inset-0 rounded-lg transition-colors" />
                    </div>
                    <div className="mb-2 flex items-center">
                      <category.icon className="mr-2 h-6 w-6 text-color1" />
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{category.countText}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Productos Destacados</h2>
            <p className="text-gray-600">Los productos más populares entre nutricionistas profesionales</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="transition-shadow hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="h-48 w-full rounded-t-lg object-contain p-4"
                    />
                    <Badge
                      className={`absolute left-2 top-2 ${
                        product.badge === "Más Vendido"
                          ? "bg-orange-500"
                          : product.badge === "Nuevo"
                            ? "bg-blue-500"
                            : product.badge === "Oferta"
                              ? "bg-red-500"
                              : "bg-color2"
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="mb-1 text-sm text-gray-500">{product.category}</p>
                  <CardTitle className="mb-2 line-clamp-2 text-lg">{product.name}</CardTitle>
                  {/* <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div> */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-color1">${product.price.toLocaleString("es-CL")}</span>
                      {/* {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )} */}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-color1 hover:bg-color2">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Agregar al Carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-color3">
                <ShoppingCart className="h-8 w-8 text-color1" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Envío Gratuito</h3>
              <p className="text-gray-600">En compras superiores a $100</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-color3">
                <Users className="h-8 w-8 text-color1" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Soporte Especializado</h3>
              <p className="text-gray-600">Asesoría de nutricionistas expertos</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-color3">
                <BookOpen className="h-8 w-8 text-color1" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Recursos Actualizados</h3>
              <p className="text-gray-600">Contenido basado en evidencia científica</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
