import * as React from 'react';
import './SidebarStyle.css'
import { NavLink } from 'react-router-dom';
import { HiOutlineUser, HiOutlineGift, HiOutlineClipboard, HiOutlineSpeakerphone } from 'react-icons/hi';
import Profile from '../../../Components/Profile/Profile';
import useSidebar from './useSidebar';

const Sidebar: React.FC = () => {
    return (
        <div id="SidebarContainer" className='h-full'>
            <div className='flex flex-col mt-8 h-2/3 justify-between items-center text-white'>
                <div id="SideProfile" className='w-24 text-sm'>
                    <Profile/>
                </div>

                <NavLink className='p-1 border-2 border-white rounded-full' to='/dashboard/userinfo'><HiOutlineUser className='text-white'/></NavLink>
                <NavLink className='p-1 border-2 border-white rounded-full' to='/dashboard/mostbenefits'><HiOutlineGift className='text-white'/></NavLink>
                <NavLink className='p-1 border-2 border-white rounded-full' to='/dashboard/benefitlist'><HiOutlineClipboard className='text-white'/></NavLink>
                <NavLink className='p-1 border-2 border-white rounded-full' to='/dashboard/hosting'><HiOutlineSpeakerphone className='text-white'/></NavLink>
            </div>
        </div>
    );
};

export default Sidebar;