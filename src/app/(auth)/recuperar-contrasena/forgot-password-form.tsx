import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { Dispatch, SetStateAction, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { forgotPasswordSchema, ForgotPasswordSchemaType } from "@/lib/zod-schemas";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type ForgotPasswordFormProps = {
  setEmailSent: Dispatch<SetStateAction<string>>;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
};

export function ForgotPasswordForm({ setEmailSent, setIsSubmitted }: ForgotPasswordFormProps) {
  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  });

  const [isPending, startTransition] = useTransition();

  function onSubmit({ email }: ForgotPasswordSchemaType) {
    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setEmailSent(email);
        setIsSubmitted(true);
      } catch {
        toast.error("Error al enviar las instrucciones de recuperación");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
        <Button type="submit" className="w-full bg-color1 hover:bg-color2" disabled={isPending}>
          {isPending ? (
            <>
              <div className="size-4 animate-spin rounded-full border-b-2 border-white"></div>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Mail className="size-4" />
              <span>Enviar Instrucciones</span>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
