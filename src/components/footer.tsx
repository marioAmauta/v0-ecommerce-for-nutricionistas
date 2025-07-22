import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { BrandLogo } from "./brand-logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-color1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold">Mantente Actualizado</h3>
            <p className="mx-auto mb-6 max-w-2xl">
              Recibe las últimas novedades en equipos nutricionales, nuevos cursos ISAK y recursos profesionales
              directamente en tu email.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input placeholder="Tu email profesional" className="bg-white text-gray-900" />
              <Button className="bg-gray-900 text-white hover:bg-gray-800">Suscribirse</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="-ml-5">
                <BrandLogo textClassName="text-white" />
              </div>
              <p className="mb-4 text-gray-400">
                Tu tienda especializada en equipos de medición antropométrica, cursos ISAK y recursos profesionales para
                nutricionistas.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Productos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Calipers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cintas Métricas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Balanzas Pediátricas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tallímetros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Básculas Digitales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Ver Todos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cursos ISAK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Plantillas de Minutas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Excel de Cálculos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Libros Especializados
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Manuales Clínicos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Asesoría Técnica
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-color1" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-color1" />
                  <span className="text-gray-400">info@nutridata.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-color1" />
                  <span className="text-gray-400">123 Health St, Medical District</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-2 font-semibold">Horarios de Atención</h4>
                <p className="text-sm text-gray-400">
                  Lun - Vie: 9:00 AM - 6:00 PM
                  <br />
                  Sáb: 10:00 AM - 4:00 PM
                  <br />
                  Dom: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <p className="text-sm text-gray-400">© 2025 NutriData. Todos los derechos reservados.</p>
              <div className="flex space-x-4 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Términos y Condiciones
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Política de Privacidad
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Política de Devoluciones
                </Link>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4 md:mt-0">
              <span className="text-sm text-gray-400">Métodos de pago:</span>
              <div className="flex space-x-2">
                <div className="rounded bg-white px-2 py-1">
                  <span className="text-xs font-bold text-gray-900">VISA</span>
                </div>
                <div className="rounded bg-white px-2 py-1">
                  <span className="text-xs font-bold text-gray-900">MC</span>
                </div>
                <div className="rounded bg-white px-2 py-1">
                  <span className="text-xs font-bold text-gray-900">AMEX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
