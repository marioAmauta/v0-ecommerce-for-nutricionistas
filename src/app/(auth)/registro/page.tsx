import Link from "next/link";

import { AppRoutes } from "@/lib/app-routes";

import { PageContainer, SectionContainer } from "@/components/layout/containers";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <PageContainer>
      <SectionContainer>
        <Card className="shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
            <CardDescription>Únete a la comunidad de profesionales nutricionistas</CardDescription>
          </CardHeader>

          <CardContent>
            <RegisterForm />
          </CardContent>

          <CardFooter className="justify-center gap-1 text-sm text-gray-600">
            <span>¿Ya tienes una cuenta?</span>
            <Link href={AppRoutes.loginPage} className="font-medium text-color1 hover:text-color2">
              Inicia sesión aquí
            </Link>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}
