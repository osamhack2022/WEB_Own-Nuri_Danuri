import * as React from 'react'
import './UserInfoStyle.css'
import profile_tmp from '../../../images/profile-tmp.png'

const Userinfo: React.FC = () => {
    return (
        <div id='UserInfoContainer' className='h-full bg-orange-400'>
            <div id='UserContent' className='flex justify-around mx-auto h-5/6 bg-white'>

                <div id='UserInfos' className='flex justify-around bg-pink-200 w-3/5'>

                    <div id='UserFixInfo'>
                        <label htmlFor='milID' className='block' />
                        <input id='milID' type='text' value='21-76028034' />

                        <label htmlFor='name' className='block' />
                        <input id='name' type='text' value='송경호' />

                        <label htmlFor='armyunit' className='block' />
                        <input id='armyunit' type='text' value='1군단 101정보통신단 운용대대' />
                    </div>

                    <div id='UserModifyInfo'>
                        <label htmlFor='pw' className='block' />
                        <input id='pw' placeholder='비밀번호' type='password' />

                        <label htmlFor='nickname' className='block' />
                        <input id='nickname' placeholder='별명' type='text' />

                        <label htmlFor='class' className='block' />
                        <select id='class'>
                            <option>병장</option>
                            <option>상병</option>
                            <option>일병</option>
                            <option>이등병</option>
                        </select>
                    </div>

                </div>

                <div id='UserProfile' className='bg-pink-200'>

                    <button>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                        </svg>
                    </button>

                    <div id="UserImage" className='w-52 h-52 rounded-full bg-white'>
                        <img src={profile_tmp} />
                    </div>

                    <button>수정</button>

                </div>
            </div>
        </div>
    )
}

export default Userinfo;