"use client";

import { FormField } from "@/components/ui/form";
import { loginformSchema, LoginformSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";
import useShow from "@/core/hooks/useShow";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const facialIcon = () => {
  return <img src="/icons/facial-recognition.svg" alt="facial-icon" />;
};

const LoginForm: React.FC = (): JSX.Element => {
  const { changeShowState, show } = useShow();

  const form = useForm<LoginformSchema>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: LoginformSchema) => {
    console.table(data);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <header className="flex flex-col gap-3">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover w-[150px]" />
        <h4 className="text-secondary text-3xl font-cal-sans">
          Content de te revoir !
        </h4>
        <p className="text-secondary-foreground">
          Se connecter à votre compte en entrant les informations du formulaire.
        </p>
      </header>
      {/* Form */}
      <FormProvider {...form}>
        <form
          className="w-full flex flex-col gap-3 items-end"
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={false}
                  type={show ? "text" : "password"}
                  placeholder="Votre mot de passe"
                  field={field}
                  label="Mot de passe"
                  suffixIcon={
                    show ? (
                      <FaEyeSlash
                        size={23}
                        className="text-secondary mr-3 cursor-pointer"
                        onClick={() => changeShowState(!show)}
                      />
                    ) : (
                      <FaEye
                        className="text-secondary mr-3 cursor-pointer"
                        size={23}
                        onClick={() => changeShowState(!show)}
                      />
                    )
                  }
                />
              );
            }}
          />
          <Button variant="link" className="text-blue-500 w-max">
            Mot de passe oublié?
          </Button>
          <Button className="w-full" type="submit">
            Se connecter
          </Button>
        </form>
      </FormProvider>

      {/* or */}
      <div className="or w-full flex items-center gap-4">
        <div className="line h-[1px] bg-secondary-foreground flex-1"></div>
        <p className="text-secondary">Ou par</p>
        <div className="line h-[1px] bg-secondary-foreground flex-1"></div>
      </div>

      {/* Facial recognition */}
      <Button
        variant="outline"
        className="border-secondary-foreground gap-1"
        Icon={facialIcon}
        iconPlacement="left"
      >
        Reconnaissance faciale
      </Button>

      {/* signup */}
      <p className="text-secondary text-center">
        Pas encore de compte?{" "}
        <span className="text-blue-500">Créer un compte</span>
      </p>
    </div>
  );
};

export default LoginForm;
