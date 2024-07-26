// components/CardList.tsx
import React from 'react';
import Card from './MiniCard';

interface MiniCardData {
  img: string;
  title: string;
}

const miniCardData: MiniCardData[][] = [
  [
    {
      img: 'https://miro.medium.com/v2/resize:fit:1000/0*Wkrz5TuOxQs9tXri.png',
      title: 'NextJs',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s',
      title: 'Tailwind',
    },
  ],
  // Add more items as needed
];

const MiniCardList: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {miniCardData.map((subArray, subArrayIndex) =>
          subArray.map((card, index) => (
            <div key={`${subArrayIndex}-${index}`}>
              <Card img={card.img} title={card.title} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MiniCardList;
