import React from 'react'
import SideNav from './_components/SideNav'
import Dashboardheader from './_components/Dashboardheader'

function Dashboardlayout({children}) {
    return (
        <div>
            <div className='fixed md:w-72 hidden md:block'>
                <SideNav/>
            </div>
            <div className='md:ml-72'>
                <Dashboardheader/>
                {children}
            </div>
        </div>
    )
}

export default Dashboardlayout
