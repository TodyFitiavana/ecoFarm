import React from "react";

interface headersection extends React.HTMLAttributes<HTMLHeadElement> {
  title: string;
  subTitle: string;
  varient?: string;
  name?: string;
  variant?: string;
}
const SectionHeader: React.FC<headersection> = ({
  title,
  subTitle,
  variant,
  name,
  ...props
}): JSX.Element => {
  return (
    <header className="flex flex-col gap-3" {...props}>
      <h2 className="text-primary text-[20px]">{title}</h2>
      <h1 className="text-[30px] font-cal-sans">
        {subTitle}{" "}
        <span
          className={`text-[#364423] bg-slate-300 p-2 rounded-full ${
            !name && "hidden"
          }`}
        >
          {name}
        </span>{" "}
        {variant == "question" && " ?"}
      </h1>
    </header>
  );
};

export default SectionHeader;
