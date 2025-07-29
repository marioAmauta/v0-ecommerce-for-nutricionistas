import Link from "next/link";

import { AppRoutes } from "@/lib/app-routes";

export function RegisterMessageWithLink() {
  return (
    <div className="space-x-1 text-center text-sm text-gray-600">
      <span>¿No tienes una cuenta?</span>
      <Link href={AppRoutes.registerPage} className="font-medium text-color1 hover:text-color2">
        Regístrate aquí
      </Link>
    </div>
  );
}

export function LoginMessageWithLink() {
  return (
    <div className="space-x-1 text-center text-sm text-gray-600">
      <span>¿Ya tienes una cuenta?</span>
      <Link href={AppRoutes.loginPage} className="font-medium text-color1 hover:text-color2">
        Inicia sesión aquí
      </Link>
    </div>
  );
}

export function TermsMessageWithLink() {
  return (
    <p className="space-x-1 text-center text-xs text-gray-500">
      <span>Al iniciar sesión, aceptas nuestros</span>
      <Link href={AppRoutes.termsPage} className="text-color1 hover:underline">
        Términos de Servicio
      </Link>
      <span>y</span>
      <Link href={AppRoutes.privacyPage} className="text-color1 hover:underline">
        Política de Privacidad
      </Link>
    </p>
  );
}
