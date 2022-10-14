import * as React from 'react';
import SignBox from './SignBox/SignBox';
import useLoginBox from './useLoginBox';

const LoginBox: React.FC = () => {
    const { certificate, toggle, selectedStyle } = useLoginBox();
    const selectstyle = 'inline-block border-2 border-white rounded-full';

    return (
        <div id='LoginContainer' className='w-80 h-96 rounded-xl bg-white text-center'>
            <div id='LoginToggleBox' className='inline-block my-8 w-fit border-2 border-black rounded-full'>
                {/* {certificate && <button className={selectedStyle}>인증하기</button>}
                    {!certificate && <button onClick={toggle} className={'inline-block w-2/5 m-1 text-white'}>인증하기</button>}
                    {certificate && <button onClick={toggle} className='inline-block w-2/5 m-1 text-white'>로그인</button>}
                    {!certificate && <button className={selectedStyle}>로그인</button>} */}
                <button onClick={toggle} className='inline-block mx-4 my-1 px-4 rounded-full'>인증하기</button>
                <button onClick={toggle} className='inline-block px-4 py-2 bg-black rounded-full text-white'>로그인</button>
            </div>

            <SignBox certificate={certificate} />
        </div>
    )
}

export default LoginBox;