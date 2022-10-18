import * as React from 'react';
import './SidebarStyle.css'

import { NavLink } from 'react-router-dom';
import { HiOutlineUser, HiOutlineGift, HiOutlineClipboard, HiOutlineSpeakerphone } from 'react-icons/hi';
import { BoardState } from './useSidebar';
import Profile from '../../../Components/Profile/Profile';

interface Props {
    isShowed: boolean
    toggleState: (state: BoardState) => void;
}

const Sidebar: React.FC<Props> = ({ isShowed, toggleState }) => {
    return (
        <div id="SidebarContainer" className='h-full'>
            <div className='flex flex-col mt-8 h-fit justify-between items-center text-white'>
                <div id="SideProfile" className='mb-8 w-24 text-sm'>
                    {isShowed ? <Profile /> : null}
                </div>

                <NavLink onClick={()=>toggleState(BoardState.UserInfo)}
                    className='p-1 mb-4 border-2 border-white rounded-full' to='/dashboard/userinfo'><HiOutlineUser className='text-white' /></NavLink>
                
                <NavLink onClick={()=>toggleState(BoardState.MostBenefits)}
                    className='p-1 mb-4 border-2 border-white rounded-full' to='/dashboard/mostbenefits'><HiOutlineGift className='text-white' /></NavLink>
                
                <NavLink onClick={()=>toggleState(BoardState.BenefitList)}
                    className='p-1 mb-4 border-2 border-white rounded-full' to='/dashboard/benefitlist'><HiOutlineClipboard className='text-white' /></NavLink>
                
                <NavLink onClick={()=>toggleState(BoardState.Hosting)}
                className='p-1 mb-4 border-2 border-white rounded-full' to='/dashboard/hosting'><HiOutlineSpeakerphone className='text-white' /></NavLink>
            </div>
        </div>
    );
};

export default Sidebar;