'use client';
import React, {useEffect} from 'react'
import Image from 'next/image'
import {ChevronsLeftRight, HomeIcon} from 'lucide-react'
import {UserButton, useUser} from '@clerk/nextjs'
import {usePathname} from 'next/navigation'
import Link from 'next/link';

function SideNav() {
    const menuList = [
        {
            id: 2,
            name: 'Overview',
            icon: HomeIcon,
            path: '/dashboard',
        },

    ]
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path])

    const {user} = useUser();

    function handleClick() {
        console.log('clicked');
        document.getElementsByClassName("cl-userButtonTrigger")[0].click()
    }

    return (
        <div className='h-screen p-5 border shadow-sm '>
            <img src={'/logo.jpg'}
                   alt='logo'
                   width={50}
                   height={50}
            />
            <div className="flex flex-col justify-between h-full pb-16">

                <div className='mt-12'>
                    {menuList.map((menu, index) => (
                        <Link href={menu.path} key={menu.name}>
                            <h2 className={`flex gap-2 items-center text-gray-500 font-medium p-5 
            cursor-pointer rounded-md hover:text-primary
            hover:bg-indigo-100
            ${path === menu.path && 'text-primary bg-indigo-100'}
            `}>
                                <menu.icon/>
                                {menu.name}
                            </h2>
                        </Link>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={handleClick}
                    className="px-4 py-4 border border-gray-200 rounded-md flex items-center justify-between hover:bg-gray-50 animate cursor-pointer relative">
                    <div className="absolute size-6 -z-10">
                        <UserButton/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={user?.imageUrl} alt="" width={48} height={48} className="size-12 rounded-full"/>
                        <span className="">
                        {user?.firstName}
                    </span>
                    </div>
                    <ChevronsLeftRight className="size-6 text-gray-400 rotate-90"/>
                </button>
            </div>

        </div>
    )
}


export default SideNav
