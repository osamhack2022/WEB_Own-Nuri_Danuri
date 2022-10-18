import * as React from 'react';
import './SidebarStyle.css'

import { NavLink } from 'react-router-dom';
import { HiOutlineUser, HiOutlineGift, HiOutlineClipboard, HiOutlineSpeakerphone } from 'react-icons/hi';
import { BoardState } from './useSidebar';
import Profile from '../../../Components/Profile/Profile';

interface Props {
    isShowed: boolean
    boardState: BoardState;
    toggleState: (state: BoardState) => void;
    themeColor: string;
}

const Sidebar: React.FC<Props> = ({ isShowed, boardState, toggleState, themeColor }) => {
    return (
        <div id="SidebarContainer" className='h-full'>
            <div className='flex flex-col mt-8 h-fit justify-between items-center text-white'>
                <div id="SideProfile" className='mb-8 w-24 text-sm'>
                    {isShowed ? <Profile /> : null}
                </div>

                <NavLink onClick={() => toggleState(BoardState.UserInfo)}
                    className={`${boardState===BoardState.UserInfo ? `bg-${themeColor}` : ''} flex items-center p-2 mb-4 rounded-full ease-linear duration-500`} to='/dashboard/userinfo'>
                    <HiOutlineUser className='text-white ' />
                    <p className='max-w-0 text-xs pl-1 ease-linear duration-500 overflow-hidden'>내 정보</p>
                </NavLink>

                <NavLink onClick={() => toggleState(BoardState.MostBenefits)}
                    className='p-2 mb-4 border-box border-2 border-white rounded-full' to='/dashboard/mostbenefits'><HiOutlineGift className='text-white' /></NavLink>

                <NavLink onClick={() => toggleState(BoardState.BenefitList)}
                    className='p-2 mb-4 border-2 border-white rounded-full' to='/dashboard/benefitlist'><HiOutlineClipboard className='text-white' /></NavLink>

                <NavLink onClick={() => toggleState(BoardState.Hosting)}
                    className='p-2 mb-4 border-2 border-white rounded-full' to='/dashboard/hosting'><HiOutlineSpeakerphone className='text-white' /></NavLink>
            </div>
        </div>
    );
};

export default Sidebar;



{/* <div class="tab-nav-container">
    <div class="tab active purple">
        <i class="fas fa-home"></i>
        <p>Home</p>
    </div>
    <div class="tab pink">
        <i class="far fa-heart"></i>
        <p>Likes</p>
    </div>
    <div class="tab yellow">
        <i class="fas fa-search"></i>
        <p>Search</p>
    </div>
    <div class="tab teal">
        <i class="far fa-user"></i>
        <p>Profile</p>
    </div>
</div>

.tab-nav-container {
    background-color: #fff;

    display: flex;
    justify-content: space-between;
    padding: 30px;
    width: 450px;
}

.tab {
    background-color: #fff;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin: 0 10px;
    transition: background 0.4s linear;
}

.tab i {
    font-size: 1.2em;
}

.tab p {
    font-weight: bold;
    overflow: hidden;
    max-width: 0;
}

.tab.active p {
    margin-left: 10px;
    max-width: 10000px;
    transition: max-width 0.3s linear;
}

.tab.active.purple {
    background-color: rgba(91, 55, 183, 0.2);
    color: rgba(91, 55, 183, 1);
}

.tab.active.pink {
    background-color: rgba(201, 55, 157, 0.2);
    color: rgba(201, 55, 157, 1);
} */}