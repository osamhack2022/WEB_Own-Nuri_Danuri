import * as React from 'react';
import logo from '../../images/logo.png'
import './LogoStyle.css';

const Logo: React.FC = () => {
    return (
        <div className='flex items-center'>
            <img src={logo} alt='OwnNuriLogo' className='inline-block' />
            <h2 id='LogoTitle' className='inline-block pt-1 text-white'>OwnNuri</h2>
        </div> 
    )
}

export default Logo;