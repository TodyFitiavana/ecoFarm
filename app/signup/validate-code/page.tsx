import SendemailForm from "@/components/shared/forms/SendemailForm";
import ValidateCodeForm from "@/components/shared/forms/ValidateCode";
import React, { FC } from "react";

const page: FC = (): JSX.Element => {
  return (
    <div className="w-[27rem] rounded-lg bg-white p-8  my-12 h-max shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <ValidateCodeForm />
    </div>
  );
};

export default page;
