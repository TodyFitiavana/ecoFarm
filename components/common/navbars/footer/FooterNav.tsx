/* eslint-disable @next/next/no-img-element */
import React from 'react';

const FooterNav = () => {
    return (
      <div className="w-full">
        <div className="lg:px-20 px-10 flex flex-col">
          <div>
            <div className="bg-[#D9D9D9] h-[1px]"></div>
          </div>
          <div className="flex lg:justify-between items-center lg:flex-row flex-col">
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