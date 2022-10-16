import * as React from 'react';
import './SidebarStyle.css'
import { NavLink } from 'react-router-dom';
import { HiMenu, HiOutlineUser, HiOutlineGift, HiOutlineClipboard, HiOutlineSpeakerphone } from 'react-icons/hi';
import Profile from '../../../Components/Profile/Profile';

const Sidebar: React.FC = () => {
    return (
        <div id="SidebarContainer" className='h-full bg-yellow-300'>
            <button><HiMenu className='text-white'/></button>

            <div className='flex flex-col mt-8 h-2/3 justify-between items-center text-white'>
                <div id="SideProfile" className='w-24 text-sm'>
                    <Profile/>
                </div>

                <NavLink className='bg-pink-300' to='/dashboard/userinfo'><HiOutlineUser className='text-white'/></NavLink>
                <NavLink className='bg-pink-300' to='/dashboard/mostbenefits'><HiOutlineGift className='text-white'/></NavLink>
                <NavLink className='bg-pink-300' to='/dashboard/benefitlist'><HiOutlineClipboard className='text-white'/></NavLink>
                <NavLink className='bg-pink-300' to='/dashboard/hosting'><HiOutlineSpeakerphone className='text-white'/></NavLink>
            </div>
        </div>
    );
};

export default Sidebar;