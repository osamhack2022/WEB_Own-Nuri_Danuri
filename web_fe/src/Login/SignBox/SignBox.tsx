import * as React from 'react';
import { Link } from 'react-router-dom';

interface props {
    certificate : boolean
}

const SignBox: React.FC<props> = ({ certificate }) => {
    if (certificate) {
        return (
            <div id="SignBox_container" className='w-full overflow-hidden rounded-md text-center bg-white'>

                <input id='CertMilID' placeholder='군번' type='text' className='block mx-auto my-5'/>

                <input id='CertPw' placeholder='비밀번호' type="password" className='block mx-auto my-5'/>

                <label htmlFor='CertArmyUnit' className='block'>부대 : </label>
                <select id='CertArmyUnit'>
                    <option>1군단 101정보통신단 운용대대</option>
                    <option>1군단 본부근무대</option>
                </select>

                <button className='block'>인증하기</button>
            </div>
        )
    }
    else {
        return (
            <div id="SignBox_container" className='w-full bg-green-500'>
                <label htmlFor='LogMilID' className='block' />
                <input id='LogMilID' placeholder='군번' type='text' />

                <label htmlFor='LogPw' className='block' />
                <input id='LogPw' placeholder='비밀번호' type="password" />
                <button className='block'><Link to="/dashboard/mostbenefits">로그인</Link></button>
            </div>
        )
    }
}

export default SignBox;