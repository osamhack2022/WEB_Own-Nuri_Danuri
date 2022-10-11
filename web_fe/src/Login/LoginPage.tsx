import * as React from 'react';
import './LoginPageStyle.css'

import SignBox from './SignBox/SignBox';
import useLoginPage from './useLoginPage';

const Login_page: React.FC = () => {
    const { certificate, toggle, selectedStyle } = useLoginPage();
    const selectstyle = 'border-box border-2 border-white rounded-full';

    return (
        <div id="LoginContainer" className='overflow-hidden w-full'>

            <div id="LoginContent" className='mx-auto my-32 w-2/5'>
                <div id="LoginToggleBox" className='my-5 w-2/5 rounded-full'>
                    {certificate && <button className={selectedStyle}>인증하기</button>}
                    {!certificate && <button onClick={toggle} className={"inline-block w-2/5 m-1 text-white"}>인증하기</button>}
                    {certificate && <button onClick={toggle} className="inline-block w-2/5 m-1 text-white">로그인</button>}
                    {!certificate && <button className={selectedStyle}>로그인</button>}            
                </div>

                <SignBox certificate={certificate} />
            </div>

        </div>
    )
}

export default Login_page;