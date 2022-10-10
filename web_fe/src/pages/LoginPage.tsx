import * as React from 'react';
import '../stylesheets/LoginPageStyle.css'

import SignBox from '../components/SignBox';
import { Type } from '../components/SignBox';

const Login_page: React.FC = () => {
    const [loginType, toggle] = React.useState<Type>(Type.SignIn);

    function toggleFunc() {
        if (loginType === Type.SignIn) toggle(Type.SignUp);
        else toggle(Type.SignIn);
    }

    return (
        <div id="LoginContainer" className='overflow-hidden'>

            <div id="LoginContent" className='mx-auto my-32 w-fit'>
                <div id="LoginToggleBox" className='my-5 w-40 rounded-full'>
                    <button onClick={toggleFunc} className="w-1/2 border-box border-2 border-white rounded-full text-white">인증하기</button>
                    <button onClick={toggleFunc} className="w-1/2 border-box border-2 border-white rounded-full text-white">로그인</button>
                </div>

                <SignBox type={loginType} />
            </div>

        </div>
    )
}

export default Login_page;