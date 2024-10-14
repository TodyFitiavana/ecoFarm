"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { OtpformSchema, otpformSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyOTP } from "@/actions/2FA.actions";
import { useToast } from "@/core/hooks/useToast";
import { useRouter } from "next/navigation";

const ValidateCodeForm: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<OtpformSchema>({
    resolver: zodResolver(otpformSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleSubmit = async (data: OtpformSchema) => {
    const response = await verifyOTP(data.otp);
    console.log(response);

    if (response.status === 200) {
      router.replace("/signup/register");
      toast({
        title: "Code validé avec succés!",
        description: "Le code à 6 chiffres a été validé avec succés",
      });
    } else {
      toast({
        title: "Un erreur s'est produit",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-md mx-auto p-4">
      <header className="flex flex-col gap-3 items-center">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover w-[150px]" />
        <h4 className="text-secondary text-[1.7em] font-cal-sans">
          Valider le code à 6 chiffres
        </h4>
        <p className="text-secondary-foreground text-center">
          Entrez le code à 6 chiffres généré par Google Authenticator après
          avoir scanné le QR code envoyé par email.
        </p>
      </header>
      {/* Form */}
      <FormProvider {...form}>
        <form
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="flex justify-center">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <InputOTPSlot
                            key={index}
                            index={index}
                            className="w-12 h-12 text-center"
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button className="w-full mt-5" type="submit">
            Confirmer
          </Button>
        </form>
      </FormProvider>

      {/* signup */}
      <p className="text-secondary text-center">
        Code non reçu? <span className="text-blue-500">Renvoyer</span>
      </p>
    </div>
  );
};

export default ValidateCodeForm;
