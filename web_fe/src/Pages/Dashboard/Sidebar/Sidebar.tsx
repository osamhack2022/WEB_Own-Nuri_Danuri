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
    bgColor: string;
}

const Sidebar: React.FC<Props> = ({ isShowed, boardState, toggleState, bgColor }) => {
    return (
        <div id="SidebarContainer" className='h-full'>
            {
                isShowed ? (
                    <div className='flex flex-col mt-8 h-fit justify-between items-center text-white'>

                        <div id="SideProfile" className='mb-6 w-24 text-sm'>
                            <Profile />
                        </div>

                        <NavLink onClick={() => toggleState(BoardState.UserInfo)} to='/dashboard/userinfo'
                            className={'SlidebarButton ' + bgColor}>
                            <HiOutlineUser className={bgColor} />
                            <p className={bgColor}>UserInfo</p>
                        </NavLink>

                        <NavLink onClick={() => toggleState(BoardState.MostBenefits)} to='/dashboard/mostbenefits'
                            className={'SlidebarButton ' + bgColor}>
                            <HiOutlineGift className={bgColor} />
                            <p className={bgColor}>MyPick</p>
                        </NavLink>

                        <NavLink onClick={() => toggleState(BoardState.BenefitList)} to='/dashboard/benefitlist'
                            className={'SlidebarButton ' + bgColor}>
                            <HiOutlineClipboard className={bgColor} />
                            <p className={bgColor}>BenefitsList</p>
                        </NavLink>

                        <NavLink onClick={() => toggleState(BoardState.Hosting)} to='/dashboard/hosting'
                            className={'SlidebarButton ' + bgColor}>
                            <HiOutlineSpeakerphone className={bgColor} />
                            <p className={bgColor}>Hosting</p>
                        </NavLink>

                    </div>) : null
            }
        </div>
    );
};

export default Sidebar;