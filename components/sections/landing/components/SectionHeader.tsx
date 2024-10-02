import { containerVariants } from "@/helpers/framerMotion/framerMotion";
import { motion } from "framer-motion";
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
      <motion.h2
        className="text-primary text-[20px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {title}
      </motion.h2>
      <motion.h1
        className="text-[30px] font-cal-sans"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {subTitle}{" "}
        <motion.span
          className={`text-[#364423] bg-slate-300 p-2 rounded-full ${
            !name && "hidden"
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {name}
        </motion.span>{" "}
        {variant == "question" && " ?"}
      </motion.h1>
    </header>
  );
};

export default SectionHeader;
