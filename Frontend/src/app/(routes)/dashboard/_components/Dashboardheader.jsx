"use client"
import {useUser} from '@clerk/nextjs'
import React from 'react'

function Dashboardheader() {
    const {user} = useUser();
    return (
        <div className='p-5 shadow-sm border-b justify-between flex'>
            <div>
                <h1 className="font-semibold text-gray-900 text-xl">Welcome Back, {user?.fullName}!</h1>
                <p className="mt-1.5 text-sm text-gray-500">Drive Your Knowledge Forward! 🎉</p>

            </div>
        </div>
    )
}

export default Dashboardheader
