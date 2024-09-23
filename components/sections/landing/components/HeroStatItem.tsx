import React from "react";

interface Props {
  nombre: string;
  nom: string;
}
const HeroStatItem: React.FC<Props> = ({ nombre, nom }): JSX.Element => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-black text-2xl text-secondary">{nombre}</h1>
      <p className="text-secondary-foreground">{nom}</p>
    </div>
  );
};

export default HeroStatItem;
