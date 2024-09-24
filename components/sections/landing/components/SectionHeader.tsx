import React from 'react';
interface headersection {
    title:string;
    subTitle:string;
    varient ? :string;
    name ? :string;
}
const SectionHeader:React.FC<headersection> = ({title,subTitle,varient,name}):JSX.Element => {
    
    return (
      <div className="flex flex-col gap-5">
        <h2 className="text-primary text-[20px]">{title}</h2>
        <h1 className="text-[40px] font-cal-sans">
          {subTitle}{" "}
          <span className={`text-[#364423] bg-slate-300 p-2 rounded-full ${!name && "hidden"}`}>
            {name == "ecofarm" ? "EcoFarm" : null}
          </span>{" "}
          {varient == "question" ? " ?" : " "}
        </h1>
      </div>
    );
};

export default SectionHeader;