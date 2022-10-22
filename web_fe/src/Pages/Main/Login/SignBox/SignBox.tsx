import * as React from 'react';
import { Link } from 'react-router-dom';
import './SignBoxStyle.css';

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

        const { id, pw, armyunit } = data;
        const defaultData = { id, name: 'default', armyunit, pw, nickname: 'default', armyclass: '이병' };
        axios.post('/UserInfo', defaultData);
    };

    // 사용신청
    if (certificate) {

        return (
            <div id="SignBoxContainer" className=''>
                <form onSubmit={handleSubmit(onValid)} className='w-full'>

                    <input {...register('id')} placeholder='군번' type='text' className='' />
                    <input {...register('pw')} placeholder='비밀번호' type='password' className='' />
                    <input {...register('armyunit')} placeholder='부대' type='text' className='' />

                    <input type='submit' value='인증하기' id='SignBoxSubmit' />

                </form>
            </div>
        )
    }

    // 로그인
    else {
        return (
            <div id="SignBoxContainer" className='w-full'>
                <form>

                    <input {...register('id')} placeholder='군번' type='text' className='' />
                    <input {...register('pw')} placeholder='비밀번호' type='password' className='' />

                    <Link to="/dashboard/mostbenefits"><button id='SignBoxSubmit'>로그인</button></Link>

                </form>
            </div>
        )
    }
}

export default SignBox;