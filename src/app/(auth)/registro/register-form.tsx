"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { GraduationCap, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { AppRoutes } from "@/lib/app-routes";
import { registerSchema, RegisterSchemaType } from "@/lib/zod-schemas";

import { InputPassword } from "@/components/input-password";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      occupation: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
      publicityAccepted: false
    }
  });

  async function onSubmit(values: RegisterSchemaType) {
    console.log({ values });

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-gray-400" />
                    <Input type="text" placeholder="Tu nombre" className="pl-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido *</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Tu apellido" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-gray-400" />
                  <Input type="email" placeholder="tu@email.com" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono *</FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-gray-400" />
                  <Input type="tel" placeholder="Tu teléfono" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
          <GraduationCap className="mr-2 h-5 w-5" />
          <span>Información Profesional</span>
        </h3>
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ocupación *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu ocupación" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="nutritionist">Nutricionista</SelectItem>
                  <SelectItem value="specialistDoctor">Médico Especialista</SelectItem>
                  <SelectItem value="student">Estudiante</SelectItem>
                  <SelectItem value="other">Otra</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch("occupation") === "nutritionist" ? (
          <FormField
            control={form.control}
            name="nutritionistLicense"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Licencia (Opcional)</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Tu número de licencia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        <Separator />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña *</FormLabel>
              <FormControl>
                <InputPassword placeholder="Tu contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Contraseña *</FormLabel>
              <FormControl>
                <InputPassword placeholder="Confirma tu contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-xs text-gray-500">
          La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números
        </p>
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>
                  Acepto los{" "}
                  <Link href={AppRoutes.termsPage} className="text-color1 hover:underline">
                    Términos de Servicio
                  </Link>{" "}
                  y la{" "}
                  <Link href={AppRoutes.privacyPage} className="text-color1 hover:underline">
                    Política de Privacidad
                  </Link>{" "}
                  *
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="publicityAccepted"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>
                  Quiero recibir actualizaciones sobre nuevos productos, cursos ISAK y contenido profesional
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-color1 hover:bg-color2"
          disabled={isLoading || form.watch("termsAccepted") === false}
        >
          {isLoading ? "Creando cuenta..." : "Crear cuenta"}
        </Button>
      </form>
    </Form>
  );
}
