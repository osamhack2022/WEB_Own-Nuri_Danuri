import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardPageStyle.css'
import Sidebar from './Sidebar/Sidebar';
import useSidebar from './Sidebar/useSidebar';
import { HiMenu } from 'react-icons/hi'

const DashboardPage: React.FC = () => {
    const { isShowed, toggleShowed } = useSidebar();

    return (
        <div id='DashContainer' className='overflow-hidden relative'>

            <div id='DashContent' className='overflow-hidden flex absolute'>
                
                <div id="DashSidebar" className={`${isShowed ? 'slideOut' : 'slideIn'}`}>
                    <button onClick={toggleShowed} className='m-4'><HiMenu className='text-white'/></button>
                    <Sidebar />
                </div>

                <div id='DashMainboard' className={`${isShowed ? 'slideOut' : 'slideIn'}`}>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default DashboardPage;