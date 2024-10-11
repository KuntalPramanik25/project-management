import React from 'react'
import Header from '@/components/Header';
import { Task, useGetTasksQuery } from '@/state/api';
import TaskCard from '@/components/TaskCard';
import LoadingIcons from 'react-loading-icons';
import { useAppSelector } from '@/app/redux';

type ListViewProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: ListViewProps) => {

    const { data: tasks, error, isLoading } = useGetTasksQuery({ projectId: Number(id)});

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const color = isDarkMode ? "white" : "gray";

    if (isLoading) return (
        <div className="flex min-h-screen flex-col items-center justify-between py-[25%]">
            <LoadingIcons.Bars width={35} fill={color} />
        </div>
    )
    if (error) return <div>An Error occurred while fetching Tasks!</div>

    return (
        <div className='px-4 pb-8 xl:px-6'>
            <div className='pt-5'>
                <Header 
                    name='Tasks'
                    buttonComponent={
                        <button 
                            className='flex items-center rounded-md bg-blue-primary px-3 py-2 text-white hover:bg-blue-600'
                            onClick={() => setIsModalNewTaskOpen(true)}>
                                Add Task
                        </button>
                    }
                    isSmalltext
                />
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
                { 
                    tasks?.map((task: Task) => (
                        <TaskCard 
                            key={task.id}
                            task={task}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ListView