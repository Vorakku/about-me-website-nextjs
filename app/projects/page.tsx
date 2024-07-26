import React from 'react';
import dynamic from 'next/dynamic';
import MiniCardList from '@/components/MiniCardList';

const ProjectList = dynamic(() => import('@/components/ProjectList'), {ssr: false});

const Project: React.FC = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className='py-12 text-3xl italic'>
                These are projects that I've coded so far.
            </h1>
            <div>
                <ProjectList />
            </div>
        </div>
    )
}

export default Project;