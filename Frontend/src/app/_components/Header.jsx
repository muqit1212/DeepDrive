'use client';
import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import {useUser, UserButton} from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
    const {user, isSignedIn} = useUser();

    return (
        <div className='bg-white p-5 flex justify-between items-center border-b border-gray-200 fixed w-full'>
            <Link href="/dashboard">
                <img
                    src={'logo.png'}
                    alt='logo'
                    width={50}
                    height={50}
                />
            </Link>
            <div className="flex items-center gap-4">
                {isSignedIn && (
                    <Link href='/dashboard'>
                        <Button variant="outline">Home Page</Button>
                    </Link>
                )}
                {isSignedIn ? (
                    <UserButton/>
                ) : (
                    <Link href='/sign-in'>
                        <Button>Get Started</Button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header
