import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../stylesheets/MainPageStyle.css';

import PageIntro from '../components/PageIntro';

const Main_page: React.FC = () => {
    return (
        <div id='MainContainer' className='w-full h-fit'>

            {/* ---------------Section #1--------------- */}
            <div id="MainSection1" className='overflow-hidden'>

                <div id='MainHeader' className='flex justify-between items-center'>

                    <img src={logo} alt='OwnNuriLogo' className='w-16 h-16 ml-4 align-middle'/>

                    <div className='flex justify-around w-64'>
                        <button>소개</button>
                        <button>로그인</button>
                        <button>사용신청</button>
                    </div>

                </div>

                <div id='MainContent' className='overflow-hidden'>
                    
                    <div className='mt-56 text-center text-white relative'>
                        <h1 id='MainTitle'>온누리</h1>
                        <h2 id='MainSubtitle' className='absolute'>혜택의 바다</h2>
                    </div>

                </div>

                <div id='MainFooter' className="opacity-90 bg-white">
                    <div id="MainWave1" className='MainWave inline-block' />
                    <div id="MainWave2" className='MainWave opacity-80 inline-block' />
                    <div id="MainWave3" className='MainWave opacity-60 inline-block' />
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