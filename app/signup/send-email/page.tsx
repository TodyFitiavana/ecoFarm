import SendemailForm from "@/components/shared/forms/SendemailForm";
import React, { FC } from "react";

const page: FC = (): JSX.Element => {
  return (
    <div className="w-[25.6rem] rounded-lg bg-white p-8  my-12 h-max shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <SendemailForm />
    </div>
  );
};

export default page;
