// components/Card.tsx
import React from 'react';


interface MiniCardProps {
  img: string;
  title: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ img, title }) => {
  return (
    <div className="flex justify-center ">
      <div className="w-16 flex flex-col space-y-2 items-center">
        <img 
        src={img} 
        alt={title} 
        className="object-cover w-16 h-16" 
        />
        <h2 className="text-center">{title}</h2>
      </div>
    </div>
  );
};

export default MiniCard;
