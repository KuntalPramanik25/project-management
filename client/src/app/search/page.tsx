'use client';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import TaskCard from '@/components/TaskCard';
import UserCard from '@/components/UserCard';
import { useSearchQuery } from '@/state/api';
import { debounce } from "lodash";
import LoadingIcons from 'react-loading-icons'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const { data: searchResults, isLoading, isError } = useSearchQuery(searchTerm, {
        //skip: searchTerm.length < 3
    });

    const handleSearch = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value);
        }, 500
    );

    useEffect(() => {
        return handleSearch.cancel;
    },
        [handleSearch.cancel]);

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const color = isDarkMode ? "white" : "gray";

    return (
        <div className='p-8'>
            <Header name='Search' />
            <div>

                <input
                    type='text'
                    placeholder='Search..'
                    //className='w-1/3 rounded-lg border-none bg-gray-200 p-2 pl-4 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white'
                    className='w-1/3 rounded-md border p-2 pl-4 pr-4 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white'
                    onChange={handleSearch}
                />
            </div>

            <div className='p-5'>
                {isLoading &&
                    <div className="flex min-h-screen flex-col items-center justify-between py-[25%]">
                        <LoadingIcons.Bars width={35} fill={color} />
                    </div>
                }
                
                {isError && <p>Error occured while fetching Search Results!</p>}

                {!isLoading && !isError && searchResults && (
                    <div>
                        {searchResults.tasks && searchResults.tasks?.length > 0 && (
                            <h2 className='text-lg font-bold pb-2 text-gray-900 dark:text-white'>Tasks</h2>
                        )}
                        {searchResults.tasks?.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}

                        {searchResults.projects && searchResults.projects?.length > 0 && (
                            <h2 className='text-lg font-bold pb-2 text-gray-900 dark:text-white'>Projects</h2>
                        )}
                        {searchResults.projects?.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}

                        {searchResults.users && searchResults.users?.length > 0 && (
                            <h2 className='text-lg font-bold pb-2 text-gray-900 dark:text-white'>Users</h2>
                        )}
                        {searchResults.users?.map((user) => (
                            <UserCard key={user.userId} user={user} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search