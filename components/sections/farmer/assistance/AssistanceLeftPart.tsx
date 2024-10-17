"use client";

import React, { FC } from "react";
import Banner from "./components/Banner";
import CategoriesSection from "./components/CategoriesSection";

const AssistanceLeftPart: FC = (): JSX.Element => {
  return (
    <div className="content-left w-[70%]">
      <Banner />
      <CategoriesSection />
    </div>
  );
};

export default AssistanceLeftPart;
