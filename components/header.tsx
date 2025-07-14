"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, ShoppingCart, User, Menu, Heart, Ruler, Users, Calculator, BookOpen } from "lucide-react"

export default function Header() {
  const [cartItems, setCartItems] = useState(3)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <p>🎓 Nuevos cursos ISAK disponibles - Certificación internacional</p>
            <div className="hidden md:flex items-center space-x-4">
              <span>📞 +1 (555) 123-4567</span>
              <span>✉️ info@nutristore.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <Ruler className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NutriStore</h1>
              <p className="text-xs text-gray-500">Equipos para Nutricionistas</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Buscar equipos, cursos, plantillas..." className="pl-10 pr-4" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-green-600">
                  {cartItems}
                </Badge>
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Mi Cuenta</DropdownMenuItem>
                <DropdownMenuItem>Mis Pedidos</DropdownMenuItem>
                <DropdownMenuItem>Lista de Deseos</DropdownMenuItem>
                <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <Ruler className="mr-2 h-4 w-4" />
                    Equipos de Medición
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Calipers</DropdownMenuItem>
                  <DropdownMenuItem>Cintas Métricas</DropdownMenuItem>
                  <DropdownMenuItem>Balanzas Pediátricas</DropdownMenuItem>
                  <DropdownMenuItem>Tallímetros</DropdownMenuItem>
                  <DropdownMenuItem>Básculas Digitales</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Cursos ISAK
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>ISAK Nivel 1</DropdownMenuItem>
                  <DropdownMenuItem>ISAK Nivel 2</DropdownMenuItem>
                  <DropdownMenuItem>ISAK Nivel 3</DropdownMenuItem>
                  <DropdownMenuItem>Cursos de Actualización</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <Calculator className="mr-2 h-4 w-4" />
                    Recursos Digitales
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Plantillas de Minutas</DropdownMenuItem>
                  <DropdownMenuItem>Excel de Cálculos</DropdownMenuItem>
                  <DropdownMenuItem>Tablas Nutricionales</DropdownMenuItem>
                  <DropdownMenuItem>Protocolos de Evaluación</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Libros y Manuales
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Libros Especializados</DropdownMenuItem>
                  <DropdownMenuItem>Manuales Clínicos</DropdownMenuItem>
                  <DropdownMenuItem>Guías de Práctica</DropdownMenuItem>
                  <DropdownMenuItem>Investigación Nutricional</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <span className="text-green-600 font-medium">🚚 Envío gratis en compras +$100</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
