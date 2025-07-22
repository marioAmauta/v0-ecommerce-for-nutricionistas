"use client";

import { Search, ShoppingCart, User, Menu, Heart, Ruler, Calculator, Container } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { BrandLogo } from "./brand-logo";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const [cartItems] = useState(3);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Search Bar */}
          <div className="mx-8 hidden max-w-lg flex-1 md:flex">
            <SearchInput />
          </div>

          {/* Actions */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-color1 p-0">
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

      {/* Mobile Search Bar */}
      <div className="mx-auto max-w-lg px-4 py-2 md:hidden">
        <SearchInput />
      </div>

      {/* Navigation */}
      <nav className="border-t">
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
            <Container className="mr-2 h-4 w-4" />
            Box de atención
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

function SearchInput() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
      <Input placeholder="Buscar equipos, cursos, plantillas..." className="pl-10 pr-4" />
    </div>
  );
}
