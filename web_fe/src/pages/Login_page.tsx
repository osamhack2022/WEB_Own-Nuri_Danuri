import * as React from 'react';
import { NavLink } from 'react-router-dom';

import SignBox from '../components/SignBox';

const Login_page: React.FC = () => {
    return (
        <div id="Login_page_container">

            <SignBox />
            <SignBox />

        </div>
    )
}

export default Login_page;