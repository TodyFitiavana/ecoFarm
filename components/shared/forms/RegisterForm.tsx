"use client";

import { FormField } from "@/components/ui/form";
import { signupformSchema, SignupformSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";

const RegisterForm: React.FC = (): JSX.Element => {
  const form = useForm<SignupformSchema>({
    resolver: zodResolver(signupformSchema),
    defaultValues: {
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
        <h4 className="text-secondary text-[1.7em] font-cal-sans text-center">
          Finalisez la création de votre compte
        </h4>
        <p className="text-secondary-foreground text-center">
          Veuillez remplir chaque informations dans le formulaire ci-dessous
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
            name="userName"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={false}
                  type="text"
                  placeholder="Votre nom complet"
                  field={field}
                  className="w-full"
                  label="Comment vous appeler?"
                />
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={false}
                  type="text"
                  placeholder="XXX.XX.XXX.XX"
                  field={field}
                  className="w-full"
                  label="Numéro mobile"
                />
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={false}
                  type="number"
                  placeholder="Votre nouveau mot de passe"
                  field={field}
                  className="w-full"
                  label="Créer votre mot de passe"
                />
              );
            }}
          />
          <Button className="w-full mt-5" type="submit">
            Se connecter
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
