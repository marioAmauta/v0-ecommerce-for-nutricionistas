"use client";

import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { AppRoutes } from "@/lib/app-routes";

import { PageContainer, SectionContainer } from "@/components/layout/containers";
import { RegisterMessageWithLink } from "@/components/layout/messages-with-link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ForgotPasswordForm } from "./forgot-password-form";
import { HelpCard } from "./help-card";

export default function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <PageContainer>
        <SectionContainer className="grid gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="size-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Email Enviado</CardTitle>
              <CardDescription>Hemos enviado las instrucciones de recuperación a tu email</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Alert>
                <Mail className="size-4" />
                <AlertDescription className="flex flex-col gap-1">
                  <strong>Revisa tu bandeja de entrada</strong>
                  <span>
                    Te hemos enviado un enlace de recuperación a <strong>{emailSent}</strong>. Si no lo encuentras,
                    revisa tu carpeta de spam.
                  </span>
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

                <Separator />

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmailSent("");
                  }}
                >
                  Enviar a otro email
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Link href={AppRoutes.loginPage} className="flex items-center gap-2 text-sm text-color1 hover:text-color2">
              <ArrowLeft className="size-4" />
              <span>Volver al inicio de sesión</span>
            </Link>
          </div>
        </SectionContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <SectionContainer className="grid gap-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Recuperar Contraseña</CardTitle>
            <CardDescription>
              Ingresa tu email y te enviaremos instrucciones para restablecer tu contraseña
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ForgotPasswordForm setEmailSent={setEmailSent} setIsSubmitted={setIsSubmitted} />

            <div className="flex items-center justify-center gap-2 overflow-hidden">
              <Separator />
              <span className="shrink-0 text-sm text-gray-500">¿Recordaste tu contraseña?</span>
              <Separator />
            </div>

            <Link href={AppRoutes.loginPage}>
              <Button variant="outline" className="w-full">
                <ArrowLeft className="size-4" />
                <span>Volver al Inicio de Sesión</span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Registration CTA */}
        <RegisterMessageWithLink />

        {/* Help Section */}
        <HelpCard />
      </SectionContainer>
    </PageContainer>
  );
}
