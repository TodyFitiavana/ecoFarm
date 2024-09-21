import React, { FC } from "react";

const LandingNav: FC = (): JSX.Element => {
  return (
    <nav className="">
      <div className="container mx-auto py-5 px-10">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="object-cover" />
      </div>
    </nav>
  );
};

export default LandingNav;
