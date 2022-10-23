import * as React from 'react';
import './LoginBoxStyle.css'
import SignBox from './SignBox/SignBox';
import useLoginBox from './useLoginBox';

const LoginBox: React.FC = () => {
    const { certificate, toggle, selectedStyle } = useLoginBox();
    const selectstyle = 'inline-block px-4 py-2 bg-black rounded-full text-white';

    return (
        <div id='LoginContainer' className='overflow-hidden w-64 h-fit rounded-xl text-center'>
            <div id='LoginToggleBox' className='w-full mx-auto'>
                <button onClick={toggle} className={(certificate ? 'unactive ' : 'active ') + 'inline-block w-1/2 px-2 pt-3 pb-2 text-xs'}>
                    로그인</button>
                <button onClick={toggle} className={(certificate ? 'active ' : 'unactive ') + 'inline-block w-1/2 px-2 pt-3 pb-2 text-xs'}>
                    사용신청</button>
            </div>

            <SignBox certificate={certificate} />
        </div>
    )
}

export default LoginBox;