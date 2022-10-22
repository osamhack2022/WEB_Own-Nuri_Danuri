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
        <div id='LoginContainer' className='overflow-hidden w-64 h-72 rounded-xl bg-white text-center'>
            <button onClick={togglePop} className='block m-1'><HiOutlineX className='w-4 h-4 bg-black rounded-full text-white'/></button>

            <div id='LoginToggleBox' className='w-5/6 mx-auto mt-8 mb-2 bg-green-300'>
                <button onClick={toggle} className={(certificate ? '' : 'active ') + 'inline-block w-1/2 px-2    py-3 rounded-full'}>로그인</button>
                <button onClick={toggle} className={(certificate ? 'active ' : '') + 'inline-block w-1/2 px-2 py-3 rounded-full'}>사용신청</button>
            </div>

            <SignBox certificate={certificate} />
        </div>
    )
}

export default LoginBox;