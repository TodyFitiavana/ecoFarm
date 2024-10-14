"use client";

import FarmerDashboardheader from "@/components/shared/headers/FarmerDashboardheader";
import FarmerDashboardnav from "@/components/shared/navbars/FarmerDashboardnav";
import { FC, Fragment } from "react";

export interface FamerLayoutProps {
  children: React.ReactNode;
}

const FarmerLayout: FC<FamerLayoutProps> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <FarmerDashboardheader />
      <FarmerDashboardnav />
      {children}
    </Fragment>
  );
};

export default FarmerLayout;
