"use client";

import Image from "next/image";
import React, { FC } from "react";
import InputComp from "../forms/InputComp";
import { FormField } from "@/components/ui/form";
import { loginformSchema, LoginformSchema } from "@/lib/formValidation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const FarmerDashboardheader: FC = (): JSX.Element => {
  const form = useForm<LoginformSchema>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <header className="farmer-header w-full overflow-hidden h-[75px] bg-white fixed">
      <div className="mx-auto px-10 flex justify-between items-center h-full py-4">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover" />

        {/* Actions */}
        <div className="farmer-header__actions flex gap-7 items-center h-full">
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
                          className="mr-3 cursor-pointer"
                        />
                      }
                    />
                  );
                }}
              />
            </form>
          </FormProvider>

          {/* bell */}
          <div className="bell h-full w-[45px] bg-[#F3F9FA] rounded-lg flex items-center justify-center">
            <Image
              src="/icons/bell.svg"
              width={16}
              height={16}
              alt="bell icon"
            />
          </div>

          {/* Profile */}
          <div className="profile flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="/avatar.png"
                className="object-cover"
              ></AvatarImage>
            </Avatar>
            <p className="text-secondary text-sm">Loick Emadisson</p>
            <Image
              src="/icons/chevron-down.svg"
              width={20}
              height={20}
              alt="search icons"
              className="mr-3"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FarmerDashboardheader;
