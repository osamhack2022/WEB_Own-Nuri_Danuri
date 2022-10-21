import * as React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import axios from 'axios';

interface props {
    certificate: boolean
}

const SignBox: React.FC<props> = ({ certificate }) => {

    // react hook form 사용
    const { register, handleSubmit } = useForm();

    const onValid = (data: any) => {
        console.log("Valid!");
        console.log(data);

        axios.post('/UserInfo', data);
    };

    // 사용신청
    if (certificate) {

        return (
            <div id="SignBox_container" className='w-full overflow-hidden rounded-md text-center bg-white'>
                <form onSubmit={handleSubmit(onValid)}>

                    <input {...register('CertMilID')} placeholder='군번' type='text' className='inline-block my-4 border-b-2 w-3/5' />
                    <input {...register('CertPW')} placeholder='비밀번호' type='password' className='inline-block my-4 border-b-2 w-3/5' />
                    <input {...register('CertArmyUnit')} placeholder='부대' type='text' className='inline-block my-4 border-b-2 w-3/5' />

                    <input type='submit' value='인증하기' className='block mx-auto my-4 w-1/5 border-2 rounded-full pt-1 border-blue-500 text-blue-500' />

                </form>
            </div>
        )
    }

    // 로그인
    else {
        return (
            <div id="SignBox_container" className='w-full overflow-hidden rounded-md text-center bg-white'>
                <form>

                    <input {...register('LoginMilID')} placeholder='군번' type='text' className='inline-block my-4 border-b-2 w-3/5' />
                    <input {...register('LoginPW')} placeholder='비밀번호' type='password' className='inline-block my-4 border-b-2 w-3/5' />

                    <Link to="/dashboard/mostbenefits"><button className='block mx-auto my-4 w-1/5 border-2 rounded-full pt-1 border-blue-500 text-blue-500'>로그인</button></Link>

                </form>
            </div>
        )
    }
}

export default SignBox;