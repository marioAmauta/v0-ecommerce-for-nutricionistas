"use client";

import { ComponentProps, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Heart,
  Ruler,
  Users,
  Calculator,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const [cartItems, setCartItems] = useState(3);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-color1 text-white p-2 rounded-lg">
              <Ruler className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NutriData</h1>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar equipos, cursos, plantillas..."
                className="pl-10 pr-4"
              />
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
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-color1">
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

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <NavigationMenu className="flex flex-col space-y-4" />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t ">
        <div className="container mx-auto px-4">
          <NavigationMenu className="hidden md:flex" />
        </div>
      </nav>
    </header>
  );
}

function NavigationMenu({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-8", className)}>
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
    </div>
  );
}
