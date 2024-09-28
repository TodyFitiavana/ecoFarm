"use client";

import { FormField } from "@/components/ui/form";
import { signupformSchema, SignupformSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";

const SendemailForm: React.FC = (): JSX.Element => {
  const form = useForm<SignupformSchema>({
    resolver: zodResolver(signupformSchema),
    defaultValues: {
      email: "",
      userName: "",
      mobileNumber: 0,
      password: "",
    },
  });

  const handleSubmit = async (data: SignupformSchema) => {
    // await authServices.login(data);
    console.log(data);
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
          className="w-full flex flex-col gap-4 items-end"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={false}
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
            Se connecter
          </Button>
        </form>
      </FormProvider>

      {/* signup */}
      <p className="text-secondary text-center">
        Vous avez déja un compte?{" "}
        <span className="text-blue-500">Confirmer</span>
      </p>
    </div>
  );
};

export default SendemailForm;
