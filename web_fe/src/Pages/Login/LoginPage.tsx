import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';
import './LoginPageStyle.css'

import SignBox from './SignBox/SignBox';
import useLoginPage from './useLoginPage';

const Login_page: React.FC = () => {
    const { certificate, toggle, selectedStyle } = useLoginPage();
    const selectstyle = 'inline-block border-2 border-white rounded-full';

    return (
        <div id="LoginContainer" className='w-full'>
            <div id="LoginHeader" className='flex items-center'>
                <Link to='/'><Logo /></Link>
            </div>

            <div id="LoginContent" className='mx-auto my-29 w-1/3 h-3/5 bg-red-900'>
                <div id="LoginToggleBox" className='my-8 w-fit rounded-full'>
                    {/* {certificate && <button className={selectedStyle}>인증하기</button>}
                    {!certificate && <button onClick={toggle} className={"inline-block w-2/5 m-1 text-white"}>인증하기</button>}
                    {certificate && <button onClick={toggle} className="inline-block w-2/5 m-1 text-white">로그인</button>}
                    {!certificate && <button className={selectedStyle}>로그인</button>} */}
                    <button onClick={toggle} className="inline-block mx-4 my-1 px-4 rounded-full text-white">인증하기</button>
                    <button onClick={toggle} className="inline-block px-4 py-2 bg-blue-300 rounded-full text-white">로그인</button>
                </div>

                <SignBox certificate={certificate} />
            </div>

        </div>
    )
}

export default Login_page;