import * as React from 'react';
import { Link } from 'react-router-dom';

import useUserInfo from '../../../../Hooks/useUserInfo';
import useInput from '../../../../Hooks/useInput';

interface props {
    certificate: boolean
}

const SignBox: React.FC<props> = ({ certificate }) => {
    const { onSubmitHandler } = useUserInfo('/UserInfo');
    // const { inputs, onChange } = useInput();

    // 사용신청
    if (certificate) {
        // const { CertMilID, CertPw, CertArmyUnit } = inputs;

        return (
            <div id="SignBox_container" className='w-full overflow-hidden rounded-md text-center bg-white'>

                <form onSubmit={onSubmitHandler}>
                    <input id='CertMilID' placeholder='군번' type='text' value={} onChange={onChange} className='inline-block my-4 border-b-2 w-3/5' />
                    <input id='CertPw' placeholder='비밀번호' type="password" onChange={onChange} className='inline-block my-4 border-b-2 w-3/5' />
                    <input id='CertArmyUnit' placeholder='부대' type="text" onChange={onChange} className='inline-block mx-2 my-4 border-b-2 w-3/5' />
                    <input type='submit' value='인증하기' className='block mx-auto my-4 w-1/5 border-2 rounded-full pt-1 border-blue-500 text-blue-500' />
                </form>

            </div>
        )
    }

    // 로그인
    else {
        return (
            <div id="SignBox_container" className='w-full overflow-hidden rounded-md text-center bg-white'>

                <input id='LogtMilID' placeholder='군번' type='text' className='inline-block my-4 border-b-2 w-3/5' />
                <input id='LogPw' placeholder='비밀번호' type="password" className='inline-block mx-2 my-4 border-b-2 w-3/5' />

                <Link to="/dashboard/mostbenefits"><button className='block mx-auto my-4 w-1/5 border-2 rounded-full pt-1 border-blue-500 text-blue-500'>로그인</button></Link>
            </div>
        )
    }
}

export default SignBox;