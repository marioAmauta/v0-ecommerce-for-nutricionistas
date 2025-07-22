"use client";

import {
  ShoppingCart,
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Plus,
  Minus,
  Check,
  AlertCircle
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock product data - in real app this would come from API/database
const product = {
  id: 1,
  name: "Caliper Harpenden Premium",
  price: 299.99,
  originalPrice: 349.99,
  images: [
    "/Plicometro HARPENDEN.jpg",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500"
  ],
  rating: 4.8,
  reviews: 124,
  category: "Equipos de Medición",
  brand: "Harpenden",
  badge: "Más Vendido",
  inStock: true,
  stockCount: 15,
  description:
    "El Caliper Harpenden Premium es el estándar de oro en medición de pliegues cutáneos para profesionales de la nutrición y antropometría. Diseñado con precisión británica, este instrumento ofrece mediciones exactas y reproducibles esenciales para evaluaciones antropométricas profesionales.",
  features: [
    "Precisión de ±0.2mm según estándares ISAK",
    "Presión constante de 10g/mm²",
    "Construcción en acero inoxidable",
    "Calibración certificada incluida",
    "Estuche de transporte profesional",
    "Garantía internacional de 2 años"
  ],
  specifications: {
    "Rango de medición": "0-48mm",
    Precisión: "±0.2mm",
    Presión: "10g/mm² constante",
    Material: "Acero inoxidable",
    Peso: "180g",
    Dimensiones: "15 x 8 x 2 cm",
    Certificación: "ISAK Level 1-4",
    Origen: "Reino Unido"
  },
  benefits: [
    "Mediciones precisas y reproducibles",
    "Cumple estándares internacionales ISAK",
    "Durabilidad profesional garantizada",
    "Fácil calibración y mantenimiento"
  ]
};

const reviews = [
  {
    id: 1,
    user: "Dr. María González",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "2025-01-15",
    title: "Excelente calidad profesional",
    comment:
      "Como nutricionista certificada ISAK, puedo confirmar que este caliper cumple perfectamente con todos los estándares. La precisión es excepcional y la construcción es muy sólida.",
    verified: true
  },
  {
    id: 2,
    user: "Lic. Carlos Ruiz",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "2025-01-10",
    title: "Inversión que vale la pena",
    comment:
      "Después de usar varios calipers, este Harpenden es definitivamente superior. La consistencia en las mediciones es notable y el estuche de transporte es muy práctico.",
    verified: true
  },
  {
    id: 3,
    user: "Dra. Ana Martínez",
    avatar: "/placeholder-user.jpg",
    rating: 4,
    date: "2025-01-05",
    title: "Muy recomendado",
    comment:
      "Excelente herramienta para consulta profesional. La única observación es que requiere un poco de práctica para dominar la técnica, pero eso es normal con cualquier caliper de precisión.",
    verified: true
  }
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 72 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 7, percentage: 6 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <span>Inicio</span> / <span>Equipos de Medición</span> / <span>Calipers</span> /
        <span className="font-medium text-gray-900"> {product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.badge && <Badge className="absolute left-4 top-4 bg-orange-500">{product.badge}</Badge>}
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 bg-gray-50 transition-colors ${
                  selectedImage === index ? "border-color1" : "border-transparent"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm text-gray-500">
              {product.category} • {product.brand}
            </p>
            <h1 className="mb-4 text-3xl font-bold text-gray-900">{product.name}</h1>

            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-current text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reseñas)
              </span>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <span className="text-3xl font-bold text-color1">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>
          </div>

          <Separator />

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <Check className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-600">En stock ({product.stockCount} disponibles)</span>
              </>
            ) : (
              <>
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="font-medium text-red-600">Agotado</span>
              </>
            )}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="font-medium">Cantidad:</label>
              <div className="flex items-center rounded-lg border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="min-w-[60px] px-4 py-2 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={quantity >= product.stockCount}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-color1 hover:bg-color2" size="lg" disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Agregar al Carrito
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsWishlisted(!isWishlisted)}>
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Key Features */}
          <div>
            <h3 className="mb-3 font-semibold">Características Principales:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Shipping & Guarantees */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
              <Truck className="h-5 w-5 text-color1" />
              <div>
                <p className="text-sm font-medium">Envío Gratis</p>
                <p className="text-xs text-gray-600">En compras +$100</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
              <Shield className="h-5 w-5 text-color1" />
              <div>
                <p className="text-sm font-medium">Garantía</p>
                <p className="text-xs text-gray-600">2 años internacional</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
              <RotateCcw className="h-5 w-5 text-color1" />
              <div>
                <p className="text-sm font-medium">Devoluciones</p>
                <p className="text-xs text-gray-600">30 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas ({product.reviews})</TabsTrigger>
            <TabsTrigger value="benefits">Beneficios</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="leading-relaxed text-gray-700">{product.description}</p>

                <div className="mt-6 rounded-lg bg-color5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-color1" />
                    <h4 className="font-semibold text-color1">Certificación ISAK</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Este caliper cumple con todos los estándares de la International Society for the Advancement of
                    Kinanthropometry (ISAK) para mediciones antropométricas profesionales en todos los niveles de
                    certificación.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-100 py-2">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Rating Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Resumen de Calificaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-center">
                    <div className="mb-2 text-4xl font-bold text-color1">{product.rating}</div>
                    <div className="mb-2 flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "fill-current text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{product.reviews} reseñas</p>
                  </div>

                  <div className="space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center gap-2">
                        <span className="w-8 text-sm">{item.stars}★</span>
                        <Progress value={item.percentage} className="flex-1" />
                        <span className="w-8 text-sm text-gray-600">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews List */}
              <div className="space-y-6 lg:col-span-2">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {review.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <h4 className="font-medium">{review.user}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Check className="mr-1 h-3 w-3" />
                                Compra verificada
                              </Badge>
                            )}
                          </div>
                          <div className="mb-2 flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-current text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <h5 className="mb-2 font-medium">{review.title}</h5>
                          <p className="text-sm text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 rounded-full bg-color1 p-2 text-white">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium">Beneficio {index + 1}</h4>
                        <p className="text-sm text-gray-600">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
