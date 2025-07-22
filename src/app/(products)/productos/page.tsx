"use client";

import { ShoppingCart, Star, Filter, Grid, List } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Caliper Harpenden Premium",
    price: 299.99,
    originalPrice: 349.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "Equipos de Medición",
    brand: "Harpenden",
    badge: "Más Vendido",
    description: "Caliper de precisión para medición de pliegues cutáneos, estándar ISAK"
  },
  {
    id: 2,
    name: "Cinta Métrica Antropométrica",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    category: "Equipos de Medición",
    brand: "Lufkin",
    description: "Cinta métrica de acero inextensible, 2 metros, certificada ISAK"
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
    brand: "Seca",
    badge: "Oferta",
    description: "Balanza digital para bebés y niños, precisión 10g, hasta 20kg"
  },
  {
    id: 4,
    name: "Tallímetro Portátil",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 45,
    category: "Equipos de Medición",
    brand: "Seca",
    description: "Tallímetro portátil de pared, rango 20-205cm, precisión 1mm"
  },
  {
    id: 5,
    name: "Curso ISAK Nivel 1 Certificado",
    price: 450.0,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 156,
    category: "Cursos",
    brand: "ISAK",
    badge: "Nuevo",
    description: "Certificación internacional en antropometría, modalidad online + práctica"
  },
  {
    id: 6,
    name: "Pack Plantillas de Minutas Premium",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 203,
    category: "Recursos Digitales",
    brand: "NutriData",
    badge: "Digital",
    description: "50+ plantillas profesionales para consultas nutricionales"
  },
  {
    id: 7,
    name: "Excel Cálculos Nutricionales Pro",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 178,
    category: "Recursos Digitales",
    brand: "NutriData",
    badge: "Digital",
    description: "Hoja de cálculo avanzada con fórmulas automáticas y bases de datos"
  },
  {
    id: 8,
    name: "Manual Clínico de Antropometría",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 92,
    category: "Libros y Manuales",
    brand: "Editorial Médica",
    description: "Guía completa de técnicas antropométricas y su aplicación clínica"
  }
];

const categories = ["Todos", "Equipos de Medición", "Cursos", "Recursos Digitales", "Libros y Manuales"];
const brands = ["Todos", "Harpenden", "Seca", "Lufkin", "ISAK", "NutriData", "Editorial Médica"];
const priceRanges = [
  { label: "Menos de $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "Más de $500", min: 500, max: Number.POSITIVE_INFINITY }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "Todos" || product.brand === selectedBrand;
    const matchesPrice =
      !selectedPriceRange || (product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max);
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Catálogo de Productos</h1>
        <p className="text-gray-600">
          Encuentra todos los equipos y recursos que necesitas para tu práctica nutricional
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border bg-white p-6">
            <div className="mb-4 flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              <h2 className="text-lg font-semibold">Filtros</h2>
            </div>

            {/* Search */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">Buscar</label>
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">Categoría</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">Marca</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">Rango de Precio</label>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`price-${index}`}
                      checked={selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max}
                      onCheckedChange={(checked) => {
                        setSelectedPriceRange(checked ? range : null);
                      }}
                    />
                    <label htmlFor={`price-${index}`} className="text-sm">
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setSelectedCategory("Todos");
                setSelectedBrand("Todos");
                setSelectedPriceRange(null);
                setSearchTerm("");
              }}
            >
              Limpiar Filtros
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Toolbar */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-gray-600">
              Mostrando {sortedProducts.length} de {products.length} productos
            </p>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="rating">Mejor Valorados</SelectItem>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex rounded-lg border">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className={`transition-shadow hover:shadow-lg ${viewMode === "list" ? "flex" : ""}`}
              >
                <CardHeader className={`p-0 ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className={`rounded-t-lg object-cover ${
                        viewMode === "list" ? "h-48 w-full rounded-l-lg rounded-t-none" : "h-48 w-full"
                      }`}
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute left-2 top-2 ${
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
                    )}
                  </div>
                </CardHeader>
                <div className={viewMode === "list" ? "flex flex-1 flex-col" : ""}>
                  <CardContent className="flex-1 p-4">
                    <p className="mb-1 text-sm text-gray-500">{product.category}</p>
                    <CardTitle className={`mb-2 ${viewMode === "list" ? "text-lg" : "text-lg"} line-clamp-2`}>
                      {product.name}
                    </CardTitle>
                    <p className="mb-2 line-clamp-2 text-sm text-gray-600">{product.description}</p>
                    <div className="mb-2 flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-current text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-color1">${product.price}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-color1 hover:bg-color2">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Agregar al Carrito
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-500">
                No se encontraron productos que coincidan con los filtros seleccionados.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSelectedBrand("Todos");
                  setSelectedPriceRange(null);
                  setSearchTerm("");
                }}
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
