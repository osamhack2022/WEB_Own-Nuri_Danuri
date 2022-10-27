import * as React from 'react'
import './BenefitListStyle.css'
import PostPreview from './PostPreview/PostPreview';

import useBenefitList from './useBenefitList';
import { BenefitListType } from './useBenefitList';

import { BiLike, BiMessage } from 'react-icons/bi'
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';

const BenefitList: React.FC = () => {
    const { listState, toggleState } = useBenefitList();

    return (
        <div id='BenefitListContainer' className='h-full bg-white overflow-hidden'>
            <span> </span>
            <div id="BenefitListMenu" className='flex justify-around items-center mx-auto my-4 w-fit h-fit'>
                <button onClick={() => { toggleState(BenefitListType.all) }}
                    className={listState === BenefitListType.all ? 'active' : ''}>전체 혜택</button>
                <button onClick={() => { toggleState(BenefitListType.mine) }}
                    className={listState === BenefitListType.mine ? 'active' : ''}>내 혜택지갑</button>
                <button onClick={() => { toggleState(BenefitListType.recommended) }}
                    className={listState === BenefitListType.recommended ? 'active' : ''}>추천</button>
                <button onClick={() => { toggleState(BenefitListType.sortbyarmy) }}
                    className={listState === BenefitListType.sortbyarmy ? 'active' : ''}>부대별</button>
            </div>

            <div id='ListBoard' className='w-2/3 mx-auto mt-8'>

                <div id='PostTitle' className='flex items-center w-full'>
                    <div id='dibs' className=''></div>
                    <div id='title' className=''>제목</div>
                    <div id='author' className=''>게시자</div>
                    <div id='period' className=''>기간</div>
                    <div id='like' className='text-blue-500'><BiLike /></div>
                    <div id='comment' className='text-blue-500'><BiMessage /></div>
                </div>

                <div id='Posts'>
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />


                    <div id='ListPages' className='flex items-center justify-center mt-4 text-xs'>
                        <div className='inline-block w-4 h-4 mr-2 ml-2 text-center text-white bg-blue-700'>1</div>
                        <div className='inline-block w-4 h-4 mr-2 text-center text-blue-700'>2</div>
                        <div className='inline-block w-4 h-4 mr-2 text-center text-blue-700'>3</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BenefitList;