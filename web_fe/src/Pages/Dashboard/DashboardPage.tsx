import * as React from 'react';
import { Outlet } from 'react-router-dom';
import './DashboardPageStyle.css'
import Sidebar from './Sidebar/Sidebar';
import useSidebar from './Sidebar/useSidebar';
import { HiMenu } from 'react-icons/hi'
import { BoardState } from './Sidebar/useSidebar';

const DashboardPage: React.FC = () => {
    const { isShowed, toggleShowed, boardState, toggleState } = useSidebar();
    
    let bgColor : string;
    switch(boardState){
        case BoardState.UserInfo : bgColor = 'userinfobg'; break;
        case BoardState.MostBenefits : bgColor = 'mostbenefitbg'; break;
        case BoardState.BenefitList : bgColor = 'benefitlistbg'; break;
        case BoardState.Hosting : bgColor = 'hostingbg'; break;
        default : bgColor='Error'; break;
    }

    return (
        <div id='DashContainer' className={'ease-linear duration-1000 overflow-hidden relative ' + bgColor}>
            <div id='DashContent' className='overflow-hidden flex absolute'>
                
                <div id="DashSidebar" className={`${isShowed ? 'slideOut' : 'slideIn'}`}>
                    <button onClick={toggleShowed} className='block m-4'><HiMenu className='text-white'/></button>
                    <Sidebar isShowed={isShowed} boardState={boardState} toggleState={toggleState} bgColor={bgColor}/>
                </div>

                <div id='DashMainboard' className={`${isShowed ? 'slideOut' : 'slideIn'}`}>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default DashboardPage;