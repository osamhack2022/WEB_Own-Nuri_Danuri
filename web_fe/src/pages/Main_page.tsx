import * as React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Main_page_style.css';

import PageIntro from '../components/PageIntro';

const Main_page: React.FC = () => {
    return (
        <div id='Main_container' className='w-full h-fit'>

            {/* ---------------Section #1--------------- */}
            <div id="Main_section1" className='overflow-hidden'>

                <div id='Main_header' className='flex justify-between'>

                    <div className=''>logo</div>

                    <div className='bg-green-100 flex justify-around w-64'>
                        <button>소개</button>
                        <button>로그인</button>
                        <button>사용신청</button>
                    </div>

                </div>

                <div id='Main_content' className='overflow-hidden'>
                    
                    <div id="Main_content_titlebox" className='mt-52 text-center text-white relative'>
                        <h1>온누리</h1>
                        <h2 className='absolute'>혜택의 바다</h2>
                    </div>

                </div>

                <div id='Main_footer' className="opacity-90 bg-white">
                    <div id="wave1" className='wave inline-block' />
                    <div id="wave2" className='wave opacity-80 inline-block' />
                    <div id="wave3" className='wave opacity-60 inline-block' />
                    <Link to='/login'><button className='inline-block bg-white text-blue-500'>Get Started!</button></Link>
                </div>

            </div>

            {/* ---------------Section #2--------------- */}
            <div id="Main_section2" className="bg-gray-500">

                <div id='Main_intro'>
                    <PageIntro imgsrc='img1' explanation='explain1' />
                    <PageIntro imgsrc='img2' explanation='explain2' />
                </div>

            </div>

        </div>
    )
}

export default Main_page;