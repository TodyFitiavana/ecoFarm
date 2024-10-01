"use client";

import { FormField } from "@/components/ui/form";
import { SendemailFormSchema, sendemailFormSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";
import { generateQR2FA } from "@/actions/2FA.actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/core/hooks/useToast";

const SendemailForm: React.FC = (): JSX.Element => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<SendemailFormSchema>({
    resolver: zodResolver(sendemailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (data: SendemailFormSchema) => {
    const response = await generateQR2FA(data.email);

    if (response.status === 200) {
      router.push("/signup/validate-code");
      toast({
        title: "Email envoyé!",
        description:
          "Nous vous avons envoyé un code QR par email, veuillez vérifier votre boîte email",
      });
    } else {
      toast({
        title: "Un erreur s'est produit!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <header className="flex flex-col gap-3 items-center">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover w-[150px]" />
        <h4 className="text-secondary text-[1.7em] font-cal-sans">
          Créer votre compte
        </h4>
        <p className="text-secondary-foreground text-center">
          Entrez votre adresse email pour débuter sur EcoFarm
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
            name="email"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={true}
                  type="email"
                  placeholder="Votre email"
                  field={field}
                  className="w-full"
                  label="Adresse Email"
                />
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
        Vous avez déja un compte?{" "}
        <span className="text-blue-500">Se connecter</span>
      </p>
    </div>
  );
};

export default SendemailForm;
