import * as React from 'react';
import './LoginBoxStyle.css'
import SignBox from './SignBox/SignBox';
import useLoginBox from './useLoginBox';

import { HiOutlineX } from 'react-icons/hi';

interface Props {
    togglePop: () => void;
}

const LoginBox: React.FC<Props> = ({ togglePop }) => {
    const { certificate, toggle, selectedStyle } = useLoginBox();
    const selectstyle = 'inline-block px-4 py-2 bg-black rounded-full text-white';

    return (
        <div id='LoginContainer' className='overflow-hidden w-80 h-96 rounded-xl bg-white text-center'>
            <button onClick={togglePop} className='block m-1'><HiOutlineX className='w-4 h-4 bg-black rounded-full text-white'/></button>

            <div id='LoginToggleBox' className='inline-bloc w-fit border-2 border-black rounded-full'>
                {/* {certificate && <button className={selectstyle}>인증하기</button>}
                {!certificate && <button onClick={toggle} className='inline-block mx-4 my-1 px-4 rounded-full'>인증하기</button>}
                {certificate && <button onClick={toggle} className='inline-block mx-4 my-1 px-4 rounded-full'>로그인</button>}
                {!certificate && <button className={selectstyle}>로그인</button>} */}
                <button onClick={toggle} className={(certificate ? '' : 'bg-black text-white ') + 'inline-block w-16 px-2 py-1 rounded-full'}>로그인</button>
                <button onClick={toggle} className={(certificate ? 'bg-black text-white ' : '') + 'inline-block w-16 px-2 py-1 rounded-full'}>사용신청</button>
            </div>

            <SignBox certificate={certificate} />
        </div>
    )
}

export default LoginBox;