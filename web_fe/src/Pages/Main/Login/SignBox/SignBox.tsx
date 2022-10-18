import * as React from 'react';
import { Link } from 'react-router-dom';

interface props {
    certificate: boolean
}

const SignBox: React.FC<props> = ({ certificate }) => {

    //사용신청
    if (certificate) {
        return (
            <div id="SignBox_container" className='w-full overflow-hidden rounded-md text-center bg-white'>

                <input id='CertMilID' placeholder='군번' type='text' className='inline-block my-4 border-b-2 w-3/5' />

                <input id='CertPw' placeholder='비밀번호' type="password" className='inline-block my-4 border-b-2 w-3/5' />

                <input id='CertArmyUnit' placeholder='부대' type="text" className='inline-block mx-2 my-4 border-b-2 w-3/5' />

                <button className='inline-block my-4 w-2/5 border-2 rounded-full py-2 border-blue-500 text-blue-500'>인증하기</button>
            </div>
        )
    }

    //로그인
    else {
        return (
            <div id="SignBox_container" className='w-full overflow-hidden rounded-md text-center bg-white'>

                <input id='LogtMilID' placeholder='군번' type='text' className='inline-block my-4 border-b-2 w-3/5' />

                <input id='LogPw' placeholder='비밀번호' type="password" className='inline-block mx-2 my-4 border-b-2 w-3/5' />

                <Link to="/dashboard/mostbenefits"><button className='inline-block my-4 w-2/5 border-2 rounded-full py-2 border-blue-500 text-blue-500'>로그인</button></Link>
            </div>
        )
    }
}

export default SignBox;