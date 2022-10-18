import * as React from 'react';
import { Outlet } from 'react-router-dom';
import './DashboardPageStyle.css'
import Sidebar from './Sidebar/Sidebar';
import useSidebar from './Sidebar/useSidebar';
import { HiMenu } from 'react-icons/hi'

const DashboardPage: React.FC = () => {
    const { isShowed, toggleShowed, boardState, toggleState, getThemeColor } = useSidebar();
    const themeColor : string = getThemeColor();

    return (
        <div id='DashContainer' className='ease-linear duration-500 overflow-hidden relative' style={
            { backgroundColor : themeColor }
        }>

            <div id='DashContent' className='overflow-hidden flex absolute'>
                
                <div id="DashSidebar" className={`${isShowed ? 'slideOut' : 'slideIn'}`}>
                    <button onClick={toggleShowed} className='block m-4'><HiMenu className='text-white'/></button>
                    <Sidebar isShowed={isShowed} boardState={boardState} toggleState={toggleState} getThemeColor={getThemeColor}/>
                </div>

                <div id='DashMainboard' className={`${isShowed ? 'slideOut' : 'slideIn'}`}>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default DashboardPage;