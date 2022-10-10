import * as React from 'react';
import '../stylesheets/LoginPageStyle.css'

import SignBox, { Type } from '../components/SignBox';

const Login_page: React.FC = () => {
    const [loginType, toggle] = React.useState<Type>(Type.LogIn);

    function toggleFunc() {
        if (loginType === Type.Certificate) toggle(Type.LogIn);
        else toggle(Type.Certificate);
    }

    const selectstyle = 'border-box border-2 border-white rounded-full';

    return (
        <div id="LoginContainer" className='overflow-hidden'>

            <div id="LoginContent" className='mx-auto my-32 w-fit'>
                <div id="LoginToggleBox" className='my-5 w-48 rounded-full'>
                    <button onClick={toggleFunc} className={"inline-block w-2/5 m-1 text-white" + selectstyle}>인증하기</button>
                    <button onClick={toggleFunc} className="inline-block w-2/5 m-1 text-white">로그인</button>
                </div>

                <SignBox type={loginType} />
            </div>

        </div>
    )
}

export default Login_page;