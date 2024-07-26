// components/CardList.tsx
import React from 'react';
import Card from './Card';

interface CardData {
  imageSrc: string;
  title: string;
  link: string;
}

const cardData: CardData[] = [
  {
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1000/0*Wkrz5TuOxQs9tXri.png',
    title: 'NextJs',
    link: 'https://nextjs.org/'

  },
  {
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s',
    title: 'Tailwind',
    link: 'https://tailwindcss.com/'
  },  

  // Add more items as needed
];

const CardList: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((card, index) => (  
            <div key={index}>
              <Card 
                link={card.link}
                imageSrc={card.imageSrc} 
                title={card.title} 
            />
            </div>
          ))}
      </div>
    </div>
  );  
};

export default CardList;
