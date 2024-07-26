// pages/index.tsx or pages/Homepage.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const CardList = dynamic(() => import('../components/CardList'), { ssr: false });

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center bg-gray-100 p-8">
        <div className="w-[50%]">
          <img src="/images/profile.png" alt="Profile" className="w-full" />
        </div>
        <div className="w-[50%] flex flex-col p-8">
          <h2 className="text-5xl font-bold my-8">This is My Homepage</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit modi dolore nam quaerat eaque ad neque harum, incidunt nesciunt eius quos natus beatae accusantium inventore accusamus sed assumenda voluptatibus?</p>
        </div>
      </div>
      <div className='w-full text-center text-3xl font-bold mt-8' >
        <h2>Technology used for developing this website</h2>
      </div>
      <div className="mt-8">
        <CardList />
      </div>
    </div>
  );
};

export default Homepage;
