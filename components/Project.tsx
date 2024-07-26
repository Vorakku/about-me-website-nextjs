import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import MiniCardList from './MiniCardList';

interface ProjectProps {
    img: string;
    title: string;
    link: string;
    description: string;
}

const Project: React.FC<ProjectProps>= ({
    img,
    title,
    link,
    description
}) => {
    return <div className=" flex w-full bg-gray-100">
                <div className="p-4">
                    <img 
                        width={700}
                        className="rounded-3xl object-fill"
                        src={img} alt={title} />
                </div>
                <div className="flex flex-col px-8 w-50%">
                    <h2 className="text-3xl font-bold my-8">{title}</h2>
                    <p>
                        {description}.
                    </p>
                <div className="w-full py-4">
                    <h3>Technology Used</h3>
                    <MiniCardList />
                    <a href={link}>
                        <div className='bg-white flex justify-start items-center py-2 px-4 rounded-xl w-[150px] border border-black'>
                            <p className="text-black px-2">
                                CLICK ME 
                            </p>
                            <FaArrowRight />
                        </div>
                    </a>
                </div>
        </div>
</div>
}

export default Project;