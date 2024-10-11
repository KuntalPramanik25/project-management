/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

type Props = {
    name: string;
    buttonComponent?: any;
    isSmalltext?: boolean;
}

const Header = ({ name, buttonComponent, isSmalltext=false }: Props) => {
    return (
        <div className='mb-5 flex w-full items-center justify-between'>
            <h1 className={ `${ isSmalltext ? "text-lg" : "text-2xl"} font-bold dark:text-white` }>
                { name }
            </h1>
            { buttonComponent }
        </div>
    )
}

export default Header