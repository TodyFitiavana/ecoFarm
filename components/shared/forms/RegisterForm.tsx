"use client";

import { FormField } from "@/components/ui/form";
import { signupformSchema, SignupformSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";
import useShow from "@/core/hooks/useShow";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import authServices from "@/services/authServices";
import { useToast } from "@/core/hooks/useToast";

const RegisterForm: React.FC = (): JSX.Element => {
  const { toast } = useToast();
  const { changeShowState, show } = useShow();
  const form = useForm<SignupformSchema>({
    resolver: zodResolver(signupformSchema),
    defaultValues: {
      nameUser: "",
      mobileNumber: "",
      password: "",
      firstnameUser: "",
    },
  });

  const handleSubmit = async (data: SignupformSchema) => {
    const response = await authServices.signup(data);

    if (response.status === 200) {
      toast({
        title: "Compte créé avec succés!",
        description: `Bienvenue sur EcoFarm ${data.nameUser}`,
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
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="nameUser"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={false}
                  type="text"
                  placeholder="Votre nom"
                  field={field}
                  className="w-full"
                  label="Comment vous appeler?"
                />
              );
            }}
          />
          <FormField
            control={form.control}
            name="firstnameUser"
            render={({ field }) => {
              return (
                <InputComp.Default
                  clear={false}
                  type="text"
                  placeholder="Votre prénom"
                  field={field}
                  className="w-full"
                  label="Votre prénom"
                />
              );
            }}
          />
          <FormField
            control={form.control}
            name="mobileNumber"
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
          <Button className="w-full mt-5" type="submit">
            Se connecter
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
