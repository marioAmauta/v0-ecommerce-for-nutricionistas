"use client";

import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type React from "react";

import { BrandLogo } from "@/components/brand-logo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RecoverPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un email válido");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch {
      setError("Ocurrió un error. Por favor intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <BrandLogo />
          </div>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Email Enviado</CardTitle>
              <CardDescription>Hemos enviado las instrucciones de recuperación a tu email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Mail className="h-4 w-4" />
                <AlertDescription>
                  <strong>Revisa tu bandeja de entrada</strong>
                  <br />
                  Te hemos enviado un enlace de recuperación a <strong>{email}</strong>. Si no lo encuentras, revisa tu
                  carpeta de spam.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>¿Qué hacer ahora?</strong>
                  </p>
                  <ol className="ml-4 list-inside list-decimal space-y-1">
                    <li>Revisa tu email (incluyendo spam)</li>
                    <li>Haz clic en el enlace de recuperación</li>
                    <li>Crea una nueva contraseña segura</li>
                    <li>Inicia sesión con tu nueva contraseña</li>
                  </ol>
                </div>

                <div className="border-t pt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                    }}
                  >
                    Enviar a otro email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/iniciar-sesion" className="inline-flex items-center text-sm text-color1 hover:text-color2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <BrandLogo />
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Recuperar Contraseña</CardTitle>
            <CardDescription>
              Ingresa tu email y te enviaremos instrucciones para restablecer tu contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Profesional</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="tu.email@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">Debe ser el mismo email que usaste para registrarte</p>
              </div>

              <Button type="submit" className="w-full bg-color1 hover:bg-color2" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Instrucciones
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">¿Recordaste tu contraseña?</span>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/iniciar-sesion">
                  <Button variant="outline" className="w-full bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Inicio de Sesión
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-color5">
          <CardContent className="p-4">
            <h3 className="mb-2 font-medium text-color1">¿Necesitas ayuda?</h3>
            <p className="mb-3 text-sm text-gray-600">
              Si tienes problemas para recuperar tu cuenta, nuestro equipo de soporte está aquí para ayudarte.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                📧 <strong>Email:</strong> soporte@nutridata.com
              </p>
              <p>
                📞 <strong>Teléfono:</strong> +1 (555) 123-4567
              </p>
              <p>
                🕒 <strong>Horario:</strong> Lun-Vie 9:00 AM - 6:00 PM
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500">
          <p>
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="font-medium text-color1 hover:text-color2">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
