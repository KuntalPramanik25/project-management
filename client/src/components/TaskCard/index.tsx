import { Task } from '@/state/api';
import { format } from "date-fns";
import Image from 'next/image';
import React from 'react'

type TaskCardProps = {
    task: Task
};

const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <div className='mb-3 rounded-lg bg-white p-4 shadow dark:bg-dark-secondary dark:text-white'>
            {
                task.attachments && task.attachments.length > 0 && (
                    <div>
                        <strong>Attachments : </strong>

                        <div className='flex flex-wrap'>
                            {
                                task.attachments && task.attachments.length > 0 && (
                                    <Image 
                                        src={`/${task.attachments[0].fileURL}`}
                                        alt={`/${task.attachments[0].fileName}`}
                                        width={400}
                                        height={200}
                                        className="rounded-md"
                                    />
                                )
                            }
                        </div>
                    </div>
                )
            }

            <p>
                <strong>ID : </strong> { task.id }
            </p>
            <p>
                <strong>Title : </strong> { task.title }
            </p>
            <p>
                <strong>Description : </strong> { " " }
                { task.description || "No Description provided" }
            </p>
            <p>
                <strong>Status : </strong> { task.status }
            </p>
            <p>
                <strong>Priority : </strong> { task.priority }
            </p>
            <p>
                <strong>Tags : </strong> { task.tags || "No Tags found" }
            </p>
            <p>
                <strong>Start Date : </strong> { " " }
                { task.startDate ? format(new Date(task.startDate), "P") : "Not Set" }
            </p>
            <p>
                <strong>Due Date : </strong> { " " }
                { task.dueDate ? format(new Date(task.dueDate), "P") : "Not Set" }
            </p>
            <p>
                <strong>Author : </strong> { " " }
                { task.author ? task.author.userName : "Unknown" } </p> <p>
            </p>
            <p>
                <strong>Assignee : </strong> { " " }
                { task.assignee ? task.assignee.userName : "Unassigned" }
            </p>
        </div>
    )
}

export default TaskCard