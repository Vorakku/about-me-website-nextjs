import React from 'react';
import Project from './Project';

interface ProjectData {
    img: string,
    title: string,
    description: string,
    link: string,
}

const projectData: ProjectData[] = [
    {
        img: 'https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg',
        title: 'To-Do Application',
        description: 'This is my first ever nextjs project. Its simple and straight-forward. User can write down their to do list, edit it if its wrong and delete it. They also can mark if it is completed',
        link: 'https://github.com/Vorakku/test-project-repository'
    },

    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZgmtXXgCUKmxiZ13rwfhayqe_hpJyQ1MWg&s',
        title: 'Bookshare',
        description: 'This is my Software Engineer Project. It is a platform for book readers to share their book collection with other uses and upload the book collection if it does not exist yet in the application',
        link: 'https://github.com/Vorakku/test-project-repository'
    }
]

const ProjectList: React.FC = () => {
    return (
        <div className='flex flex-col'>
            {projectData.map((project, index) => (
                <div key={index}>
                    <Project 
                    link={project.link}
                    img={project.img}
                    description={project.description}
                    title={project.title}
                    />
                </div>
            ))}
        </div>
    )
}


export default ProjectList;