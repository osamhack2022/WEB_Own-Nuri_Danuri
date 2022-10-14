import * as React from 'react';
import logo from '../../images/logo.png'
import './LogoStyle.css';

const Logo: React.FC = () => {
    return (
        <div className='ml-4'>
            <img src={logo} alt='OwnNuriLogo' className='inline-block w-12 h-12' />
            <h2 id='LogoTitle' className='inline-block align-middle mt-1 text-white'>OwnNuri</h2>
        </div>
    )
}

export default Logo;