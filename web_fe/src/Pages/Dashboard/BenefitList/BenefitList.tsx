import * as React from 'react'
import './BenefitListStyle.css'
import PostPreview from './PostPreview/PostPreview';

import useBenefitList from './useBenefitList';
import { BenefitListType } from './useBenefitList';

const BenefitList: React.FC = () => {
    const { listState, toggleState } = useBenefitList();

    return (
        <div id='BenefitListContainer' className='h-full overflow-hidden bg-white'>
            
            <div id="BenefitListMenu" className='flex justify-around items-center mx-auto my-2 w-fit h-fit'>
                <button onClick={() => { toggleState(BenefitListType.all) }}
                    className={listState === BenefitListType.all ? 'active' : ''}>전체 혜택</button>
                <button onClick={() => { toggleState(BenefitListType.mine) }}
                    className={listState === BenefitListType.mine ? 'active' : ''}>내 혜택지갑</button>
                <button onClick={() => { toggleState(BenefitListType.recommended) }}
                    className={listState === BenefitListType.recommended ? 'active' : ''}>추천</button>
                <button onClick={() => { toggleState(BenefitListType.sortbyarmy) }}
                    className={listState === BenefitListType.sortbyarmy ? 'active' : ''}>부대별</button>
            </div>

            <div id='ListBoard' className='bg-blue-300 w-2/3 mx-auto'>

                <div id='PostsTitle'>어쩌구 저쩌구</div>

                <div id='Posts'>
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    {/* <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} /> */}
                </div>
            </div>
        </div>
    )
}

export default BenefitList;