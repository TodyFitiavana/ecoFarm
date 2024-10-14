"use client";

import Image from "next/image";
import React, { FC } from "react";
import InputComp from "../forms/InputComp";
import { FormField } from "@/components/ui/form";
import { loginformSchema, LoginformSchema } from "@/lib/formValidation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FarmerDashboardheader: FC = (): JSX.Element => {
  const form = useForm<LoginformSchema>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <header className="farmer-header w-full overflow-hidden h-[75px] bg-white">
      <div className="mx-auto px-10 flex justify-between items-center h-full py-4">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover" />

        {/* Actions */}
        {/* Search input*/}
        <FormProvider {...form}>
          <form
          // onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <InputComp.Default
                    clear={false}
                    placeholder="Recherchez..."
                    field={field}
                    className="w-[280px]"
                    suffixIcon={
                      <Image
                        src="/icons/search.svg"
                        width={20}
                        height={20}
                        alt="search icons"
                        className="mr-3"
                      />
                    }
                  />
                );
              }}
            />
          </form>
        </FormProvider>
      </div>
    </header>
  );
};

export default FarmerDashboardheader;
