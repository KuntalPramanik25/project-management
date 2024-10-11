import { User } from '@/state/api';
import Image from 'next/image';
import React from 'react'

type UserCardProps = {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className='flex items-center shadow mb-3 rounded-lg bg-white p-4 dark:bg-dark-secondary dark:text-white'>
            {user.profilePictureUrl && (
                <Image
                    src={`/p1.jpeg`}
                    alt='Profile Picture'
                    width={32}
                    height={32}
                    className='rounded-full'
                />
            )}

            <div>
                <h3>{user.userName}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default UserCard