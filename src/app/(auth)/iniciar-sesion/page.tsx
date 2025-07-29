import { PageContainer, SectionContainer } from "@/components/layout/containers";
import { RegisterMessageWithLink, TermsMessageWithLink } from "@/components/layout/messages-with-link";
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

          <CardFooter className="flex-col gap-2">
            <RegisterMessageWithLink />
            <TermsMessageWithLink />
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}
