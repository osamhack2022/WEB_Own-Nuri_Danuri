import * as React from 'react'
import './BenefitListStyle.css'
import PostPreview from './PostPreview/PostPreview';

const BenefitList: React.FC = () => {
    return (
        <div id='BenefitListContainer' className='h-full overflow-hidden bg-cyan-300'>
            <div id="BenefitListMenu" className='flex justify-around items-center mx-auto my-2 w-fit h-fit bg-white'>
                <button className='px-8 pt-4 pb-3 border-b-2 border-black'>전체 혜택</button>
                <button className='px-8 pt-4 pb-3 border-b-2 border-black'>내 혜택지갑</button>
                <button className='px-8 pt-4 pb-3 border-b-2 border-black'>추천</button>
                <button className='px-8 pt-4 pb-3 border-b-2 border-black'>부대별</button>
            </div>

            <div id='ListBoard' className='bg-blue-300'>

                <div id='PostsTitle'>어쩌구 저쩌구</div>
                
                <div id='Posts'>
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
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                    <PostPreview
                        id={1} title={'병 자기개발 비용'} type={'이벤트'} author={'육군'}
                        period={'21.04.26 - 22.10.25'} like={1} comment={1} />
                </div>
            </div>
        </div>
    )
}

export default BenefitList;