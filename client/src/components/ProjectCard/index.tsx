import { Project } from '@/state/api';
import React from 'react'

type ProjectCardProps = {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className='shadow mb-3 rounded-lg bg-white p-4 dark:bg-dark-secondary dark:text-white'>
            <h3><strong>{ project.name }</strong></h3>
            <p><strong>Project Id : </strong>{ project.id }</p>
            <p><strong>About the Project : </strong>{ project.description }</p>
            <p><strong>Start Date : </strong>{ project.startDate }</p>
            <p><strong>End Date : </strong>{ project.endDate }</p>
        </div>
    )
}

export default ProjectCard