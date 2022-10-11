import * as React from 'react';
import '../stylesheets/LoginPageStyle.css'

import SignBox from '../components/SignBox';
import useLoginPage from '../hooks/useLoginPage';

const Login_page: React.FC = () => {
    const { certificate, toggle } = useLoginPage();
    const selectstyle = 'border-box border-2 border-white rounded-full';

    return (
        <div id="LoginContainer" className='overflow-hidden'>

            <div id="LoginContent" className='mx-auto my-32 w-fit'>
                <div id="LoginToggleBox" className='my-5 w-48 rounded-full'>
                    {certificate && <button className={"inline-block w-2/5 m-1 text-white"}>인증하기</button>}
                    {!certificate && <button onClick={toggle} className={"inline-block w-2/5 m-1 text-white"}>인증하기</button>}
                    {certificate && <button onClick={toggle} className="inline-block w-2/5 m-1 text-white">로그인</button>}
                    {!certificate && <button className="inline-block w-2/5 m-1 text-white">로그인</button>}            
                </div>

                <SignBox certificate={certificate} />
            </div>

        </div>
    )
}

export default Login_page;