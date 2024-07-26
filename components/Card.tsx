// components/Card.tsx
import React from 'react';


interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, link }) => {
  return (
    <div className="flex justify-center ">
      <a href={link}>
      <div className="w-32 flex flex-col space-y-2 items-center">
        <img 
        src={imageSrc} 
        alt={title} 
        className="object-cover w-28 h-28" 
        />
        <h2 className="text-center">{title}</h2>
      </div>
      </a>
    </div>
  );
};

export default Card;
