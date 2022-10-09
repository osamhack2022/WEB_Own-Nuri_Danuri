import * as React from 'react';
import { NavLink } from 'react-router-dom';

import SignBox from '../components/SignBox';
import { Type } from '../components/SignBox';

const Login_page: React.FC = () => {
    const [loginType, toggle] = React.useState<Type>(Type.SignIn);

    function toggleFunc() {
        if(loginType === Type.SignIn) toggle(Type.SignUp);
        else toggle(Type.SignIn);
    }

    return (
        <div id="Login_page_container">
            <button onClick={toggleFunc} className="px-3 py-1 bg-blue-400">{loginType === Type.SignIn ? "Sign up" : "Sign in"}</button>
            <SignBox type={loginType} />
        </div>
    )
}

export default Login_page;