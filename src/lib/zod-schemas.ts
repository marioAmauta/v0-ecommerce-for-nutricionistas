import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({
    error: "El email debe ser válido"
  }),
  password: z.string().min(8, {
    error: "La contraseña debe tener al menos 8 caracteres"
  })
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    firstName: z.string().min(1, {
      error: "El nombre es requerido"
    }),
    lastName: z.string().min(1, {
      error: "El apellido es requerido"
    }),
    phoneNumber: z.string().min(10, {
      error: "El número de teléfono debe tener al menos 10 caracteres"
    }),
    occupation: z.string().min(1, {
      error: "La ocupación es requerida"
    }),
    nutritionistLicense: z.string().optional(),
    confirmPassword: z.string().min(8, {
      error: "La confirmación de contraseña debe tener al menos 8 caracteres"
    }),
    termsAccepted: z.boolean().refine((value) => value, {
      error: "Debes aceptar los términos y condiciones"
    }),
    publicityAccepted: z.boolean().optional()
  })
  .extend(loginSchema.shape)
  .refine((data) => data.password === data.confirmPassword, {
    error: "Las contraseñas no coinciden"
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
