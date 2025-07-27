"use client";

import { Eye, EyeOff, Mail, Lock, User, Phone, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type React from "react";

import { AppRoutes } from "@/lib/app-routes";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profession: "",
    country: "",
    licenseNumber: ""
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) return;

    setIsLoading(true);

    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    // Handle registration logic here
  };

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
            <CardDescription>Únete a la comunidad de profesionales nutricionistas</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Registration */}
            {/* <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full bg-transparent">
                <Chrome className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div> 

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  O regístrate con email
                </span>
              </div>
            </div>
            */}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    Nombre *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                    <Input
                      id="firstName"
                      placeholder="Tu nombre"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Apellido *
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Tu apellido"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+56 9 5555 1234"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="border-t pt-4">
                <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Información Profesional
                </h3>

                <div>
                  <div className="space-y-2">
                    <label htmlFor="profession" className="text-sm font-medium text-gray-700">
                      Profesión *
                    </label>
                    <Select
                      value={formData.profession}
                      onValueChange={(value) => handleInputChange("profession", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu profesión" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nutricionista">Nutricionista</SelectItem>
                        <SelectItem value="nutriologo">Nutriólogo</SelectItem>
                        <SelectItem value="medico">Médico Especialista</SelectItem>
                        <SelectItem value="estudiante">Estudiante</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="text-sm font-medium text-gray-700"
                    >
                      País *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          handleInputChange("country", value)
                        }
                      >
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Selecciona tu país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mx">México</SelectItem>
                          <SelectItem value="co">Colombia</SelectItem>
                          <SelectItem value="ar">Argentina</SelectItem>
                          <SelectItem value="cl">Chile</SelectItem>
                          <SelectItem value="pe">Perú</SelectItem>
                          <SelectItem value="es">España</SelectItem>
                          <SelectItem value="us">Estados Unidos</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  */}
                </div>

                {formData.profession === "nutricionista" ? (
                  <div className="mt-4 space-y-2">
                    <label htmlFor="licenseNumber" className="text-sm font-medium text-gray-700">
                      Número de Colegiatura/Licencia (Opcional)
                    </label>
                    <Input
                      id="licenseNumber"
                      placeholder="Ej: 12345"
                      value={formData.licenseNumber}
                      onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                    />
                    <p className="text-xs text-gray-500">
                      Esto nos ayuda a verificar tu estatus profesional para acceso a contenido especializado
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Password */}
              <div className="border-t pt-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Contraseña *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                      Confirmar Contraseña *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números
                </p>
              </div>

              {/* Terms and Newsletter */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm leading-relaxed text-gray-600">
                    Acepto los{" "}
                    <Link href={AppRoutes.termsPage} className="text-color1 hover:underline">
                      Términos de Servicio
                    </Link>{" "}
                    y la{" "}
                    <Link href={AppRoutes.privacyPage} className="text-color1 hover:underline">
                      Política de Privacidad
                    </Link>{" "}
                    *
                  </label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={acceptNewsletter}
                    onCheckedChange={(checked) => setAcceptNewsletter(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="newsletter" className="text-sm leading-relaxed text-gray-600">
                    Quiero recibir actualizaciones sobre nuevos productos, cursos ISAK y contenido profesional
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-color1 hover:bg-color2" disabled={isLoading || !acceptTerms}>
                {isLoading ? "Creando cuenta..." : "Crear Cuenta Profesional"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link href={AppRoutes.loginPage} className="font-medium text-color1 hover:text-color2">
                Inicia sesión aquí
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
