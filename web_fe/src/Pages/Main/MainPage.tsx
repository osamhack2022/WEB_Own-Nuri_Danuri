import * as React from 'react';
import './MainPageStyle.css';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';
import PageIntro from './PageIntro/PageIntro';
import Modal from '../../Components/Modal/Modal';
import SignBox from '../Login/SignBox/SignBox';

import useModal from '../../Components/Modal/useModal';

const Main_page: React.FC = () => {
    const {isPoped, togglePop} = useModal();

    return (
        <div id='MainContainer' className='w-full'>

            {/* ---------------Section #1--------------- */}
            <div id='MainSection1' className='overflow-hidden'>

                <div id='MainHeader' className='flex justify-between items-center'>

                    <Logo />

                    <div id='MainNav' className='flex justify-around mr-4 w-80 text-white'>
                        <button onClick={togglePop} className='animate-pulse inline-block text-white'>시작하기</button>
                    </div>

                </div>

                <div id='MainContent' className='overflow-hidden'>

                    <div className='mt-56 text-center text-white relative'>
                        <h1 id='MainTitle'>온누리</h1>
                        <h2 id='MainSubtitle' className='absolute'>혜택의 바다</h2>
                    </div>

                </div>

                <div id='MainFooter' className='relative opacity-80 bg-white'>
                    <div id='MainWave1' className='MainWave inline-block absolute' />
                    <div id='MainWave2' className='MainWave inline-block absolute opacity-60' />
                    <div id='MainWave3' className='MainWave inline-block absolute opacity-40' />

                    <div className='motion-reduce:animate-bounce absolute bottom-1/4 mx-auto bg-red-500'>
                        <span className='inline-block bg-red-900'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3' />
                            </svg>
                        </span>
                        <span className='inlin-block bg-red-100'>더 알아보기</span>
                    </div>
                </div>

            </div>

            {/* ---------------Section #2--------------- */}
            <div id='MainSection2'>

                <div id='MainIntro'>
                    {/* <PageIntro imgsrc='img1' explanation='explain1' />
                    <PageIntro imgsrc='img2' explanation='explain2' /> */}
                </div>

            </div>

            <Modal isPoped={isPoped} togglePop={togglePop}>
                <SignBox certificate={false}></SignBox>
            </Modal>

        </div>
    )
}

export default Main_page;