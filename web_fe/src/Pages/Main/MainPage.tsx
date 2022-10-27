    import * as React from 'react';
import './MainPageStyle.css';

import Logo from '../../Components/Logo/Logo';
import PageIntro from './PageIntro/PageIntro';
import Modal from '../../Components/Modal/Modal';
import useModal from '../../Components/Modal/useModal';
import LoginBox from './Login/LoginBox';

import { HiArrowDown } from 'react-icons/hi'


const Main_page: React.FC = () => {
    const { isPoped, togglePop } = useModal();

    return (
        <div id='MainContainer' className='w-full'>

            {/* ---------------Section #1--------------- */}
            <div id='MainSection1' className='overflow-hidden'>

                <div id='MainHeader' className='flex justify-between items-center'>

                    <div className='m-4 w-12 h-12 text-xl'><Logo /></div>

                    <div id='MainNav' className='flex justify-between mr-8 w-32'>
                        <button className='text-white pt-1 hover:text-gray-300'>소개</button>
                        <button onClick={togglePop} className='text-white px-2 pt-1 rounded-full border-2 border-white border-box
                         hover:border-gray-300 hover:text-gray-300'>시작하기</button>
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

                    <div id='MainMoreInfo' className='absolute bottom-1/4 left-1/2 px-2 w-fit flex items-center text-white rounded-full'>
                        <HiArrowDown className='w-4 h-4' />
                        <span className='pt-1 pl-2 text-base'>About</span>
                    </div>
                </div>

            </div>

            {/* ---------------Section #2--------------- */}
            <div id='MainSection2'>

                {/* <div id='MainIntro'>
                    <PageIntro imgsrc='img1' explanation='explain1' />
                    <PageIntro imgsrc='img2' explanation='explain2' />
                </div> */}

            </div>

            <Modal isPoped={isPoped} togglePop={togglePop}>
                <LoginBox />
            </Modal>

        </div>
    )
}

export default Main_page;