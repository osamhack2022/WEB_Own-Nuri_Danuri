import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardPageStyle.css'
import Sidebar from './Sidebar/Sidebar';

const DashboardPage: React.FC = () => {
    return (
        <div id='DashContainer' className='overflow-hidden relative'>

            <div id='DashContent' className='overflow-hidden flex absolute'>
                
                <div id="DashSidebar">
                    <Sidebar />
                </div>

                <div id='DashMainboard' className=''>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default DashboardPage;