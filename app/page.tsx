import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Star,
  Users,
  BookOpen,
  Calculator,
  Ruler
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Caliper Harpenden Premium",
    price: 299.99,
    originalPrice: 349.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "Equipos de Medición",
    badge: "Más Vendido"
  },
  {
    id: 2,
    name: "Curso ISAK Nivel 1 Certificado",
    price: 450.0,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    category: "Cursos",
    badge: "Nuevo"
  },
  {
    id: 3,
    name: "Balanza Pediátrica Digital",
    price: 189.99,
    originalPrice: 229.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 67,
    category: "Equipos de Medición",
    badge: "Oferta"
  },
  {
    id: 4,
    name: "Pack Plantillas de Minutas Premium",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 203,
    category: "Recursos Digitales",
    badge: "Digital"
  }
];

const categories = [
  {
    name: "Equipos de Medición",
    icon: Ruler,
    count: 24,
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Cursos ISAK",
    icon: Users,
    count: 8,
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Recursos Digitales",
    icon: Calculator,
    count: 45,
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Libros y Manuales",
    icon: BookOpen,
    count: 32,
    image: "/placeholder.svg?height=200&width=300"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Equipos y Recursos para
                <span className="text-color1"> Nutricionistas</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Todo lo que necesitas para tu práctica profesional: equipos de
                medición, cursos ISAK, plantillas, libros especializados y más.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-color1 hover:bg-color2">
                  Ver Catálogo
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-color1 border-color1 hover:bg-color5"
                >
                  Cursos ISAK
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Categorías Especializadas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas para tu consulta
              nutricional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categoria/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
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
                      <h3 className="font-semibold text-gray-900">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {category.count} productos
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-gray-600">
              Los productos más populares entre nutricionistas profesionales
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className={`absolute top-2 left-2 ${
                        product.badge === "Más Vendido"
                          ? "bg-orange-500"
                          : product.badge === "Nuevo"
                          ? "bg-blue-500"
                          : product.badge === "Oferta"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500 mb-1">
                    {product.category}
                  </p>
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center mb-2">
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
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-color1">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-color1 hover:bg-green-700">
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-color3 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-color1" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Envío Gratuito</h3>
              <p className="text-gray-600">En compras superiores a $100</p>
            </div>
            <div className="text-center">
              <div className="bg-color3 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-color1" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Soporte Especializado
              </h3>
              <p className="text-gray-600">
                Asesoría de nutricionistas expertos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-color3 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-color1" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Recursos Actualizados
              </h3>
              <p className="text-gray-600">
                Contenido basado en evidencia científica
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
