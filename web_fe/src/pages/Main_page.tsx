import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/total.css';

import PageIntro from '../components/PageIntro';

const Main_page: React.FC = () => {
    return (
        <div id='Main_page_container' className='w-full h-fit'>

             {/* ---------------Section #1--------------- */}   
            <div id="Main_page_section1">

                <div id='Main_page_header' className='flex justify-between'>

                    <div className=''>logo</div>

                    <div className='flex justify-around w-64'>
                        <button>소개</button>
                        <button>로그인</button>
                        <button>사용신청</button>
                    </div>

                </div>

                <div id='Main_page_content' className='pt-44 text-center text-white relative'>
                    <h1 id="title">온누리</h1>
                    <h2 id="subtitle" className='absolute'>헤택의 바다</h2>
                </div>

                <div id='Main_page_footer' className="h-2/6 bg-white">
                    <NavLink to='/login'><button className='inline-block bg-white text-blue-500'>Get Started!</button></NavLink>
                </div>

            </div>

            {/* ---------------Section #2--------------- */}
            <div id="Main_page_section2" className="bg-gray-500">

                <div id='Main_page_intro'>
                    <PageIntro imgsrc='img1' explanation='explain1' />
                    <PageIntro imgsrc='img2' explanation='explain2' />
                </div>

            </div>

        </div>
    )
}

export default Main_page;