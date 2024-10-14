/* eslint-disable @next/next/no-img-element */
"use client";

import React, { FC } from "react";

const FooterNav: FC = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="px-20 flex flex-col">
        <div>
          <div className="bg-[#D9D9D9] h-[1px]"></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <img src="/logo.svg" alt="logo" className="object-cover" />
          <p className="text-[16px] text-[#282828A6]">
            Ecofarm 2024 by IT-WARRIOR
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
