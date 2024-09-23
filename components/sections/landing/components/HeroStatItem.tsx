import React from 'react';

interface Props{
    nombre:string;
    nom:string;
}
const HeroStatItem:React.FC<Props> = ({nombre,nom}):JSX.Element => {
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-[25px]'>{nombre}</h1>
            <p>{nom}</p>
        </div>
    );
};

export default HeroStatItem;