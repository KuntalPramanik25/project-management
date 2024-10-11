import Header from '@/components/Header';
import React from 'react'

const Settings = () => {

    const UserSettings = {
        username: "johndoe",
        email: "test@gmail.com",
        teamName: "Development Team",
        roleName: "Developer"
    }

    const LabelStyles = "block text-sm font-medium dark:text-white";
    const TextStyles = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

    return (
        <div className='p-8'>
            <Header name='Settings' />

            <div className='space-y-4'>
                <div>
                    <label className={LabelStyles}>Username</label>
                    <div className={TextStyles}>{UserSettings.username}</div>
                </div>
                <div>
                    <label className={LabelStyles}>Email Address</label>
                    <div className={TextStyles}>{UserSettings.email}</div>
                </div>
                <div>
                    <label className={LabelStyles}>Team</label>
                    <div className={TextStyles}>{UserSettings.teamName}</div>
                </div>
                <div>
                    <label className={LabelStyles}>Role</label>
                    <div className={TextStyles}>{UserSettings.roleName}</div>
                </div>
            </div>
        </div>
    )
}

export default Settings