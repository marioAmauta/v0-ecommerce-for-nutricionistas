import Link from "next/link";

import { AppRoutes } from "@/lib/app-routes";

import { PageContainer, SectionContainer } from "@/components/layout/containers";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <PageContainer>
      <SectionContainer>
        <Card className="shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
            <CardDescription>Accede a tu cuenta para continuar</CardDescription>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 text-center">
            <div className="space-x-1 text-sm text-gray-600">
              <span>¿No tienes una cuenta?</span>
              <Link href={AppRoutes.registerPage} className="font-medium text-color1 hover:text-color2">
                Regístrate aquí
              </Link>
            </div>
            <p className="space-x-1 text-xs text-gray-500">
              <span>Al iniciar sesión, aceptas nuestros</span>
              <Link href={AppRoutes.termsPage} className="text-color1 hover:underline">
                Términos de Servicio
              </Link>
              <span>y</span>
              <Link href={AppRoutes.privacyPage} className="text-color1 hover:underline">
                Política de Privacidad
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}
