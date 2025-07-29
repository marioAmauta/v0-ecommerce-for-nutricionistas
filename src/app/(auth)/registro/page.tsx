import { PageContainer, SectionContainer } from "@/components/layout/containers";
import { LoginMessageWithLink } from "@/components/layout/messages-with-link";
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

          <CardFooter className="justify-center">
            <LoginMessageWithLink />
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}
