"use client";

import { FC } from "react";

const FarmerDashboardnav: FC = (): JSX.Element => {
  return (
    <div className="farmer-nav h-[calc(100vh-80px)] p-5 fixed mt-[80px]">
      <nav className="w-[300px] h-full rounded-xl bg-white"></nav>
    </div>
  );
};

export default FarmerDashboardnav;
