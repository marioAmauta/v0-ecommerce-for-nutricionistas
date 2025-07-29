import { Card, CardContent } from "@/components/ui/card";

export function HelpCard() {
  return (
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
  );
}
