import { containerVariants } from "@/helpers/framerMotion/framerMotion";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  nombre: string;
  nom: string;
}
const HeroStatItem: React.FC<Props> = ({ nombre, nom }): JSX.Element => {
  return (
    <motion.div
      className="flex flex-col gap-1"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1
        className="font-black text-2xl text-secondary"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {nombre}
      </motion.h1>
      <motion.p
        className="text-secondary-foreground"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {nom}
      </motion.p>
    </motion.div>
  );
};

export default HeroStatItem;
