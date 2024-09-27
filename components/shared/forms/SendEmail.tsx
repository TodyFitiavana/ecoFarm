"use client";

import { FormField } from "@/components/ui/form";
import { loginformSchema, LoginformSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";
import useShow from "@/core/hooks/useShow";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import authServices from "@/services/authServices";

export const facialIcon = () => {
  return <img src="/icons/facial-recognition.svg" alt="facial-icon" />;
};

const SendemailForm: React.FC = (): JSX.Element => {
  const { changeShowState, show } = useShow();

  const form = useForm<LoginformSchema>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginformSchema) => {
    await authServices.login(data);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <header className="flex flex-col gap-3 items-center">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover w-[150px]" />
        <h4 className="text-secondary text-3xl font-cal-sans">
          Créer votre compte
        </h4>
        <p className="text-secondary-foreground text-center">Entrez votre adresse email pour débuter sur EcoFarm</p>
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
        <span className="text-blue-500">Se connecter</span>
      </p>
    </div>
  );
};

export default SendemailForm;
