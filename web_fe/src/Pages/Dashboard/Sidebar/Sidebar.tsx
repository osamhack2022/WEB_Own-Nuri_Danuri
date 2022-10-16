import * as React from 'react';
import './SidebarStyle.css'
import { NavLink } from 'react-router-dom';
import { HiMenu, HiOutlineUser, HiOutlineGift, HiOutlineClipboard, HiOutlineSpeakerphone } from 'react-icons/hi';

const Sidebar: React.FC = () => {
    return (
        <div id="SidebarContainer" className='h-full bg-yellow-300'>
            <button><HiMenu /></button>

            <div className='flex flex-col'>
                <div id="SideProfile" className='bg-pink-500'>
                    
                </div>

                <NavLink className='bg-pink-300' to='/dashboard/userinfo'><HiOutlineUser /></NavLink>
                <NavLink className='bg-pink-300' to='/dashboard/mostbenefits'><HiOutlineGift /></NavLink>
                <NavLink className='bg-pink-300' to='/dashboard/benefitlist'><HiOutlineClipboard /></NavLink>
                <NavLink className='bg-pink-300' to='/dashboard/hosting'><HiOutlineSpeakerphone /></NavLink>
            </div>
        </div>
    );
};

export default Sidebar;