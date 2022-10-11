import * as React from 'react'
import '../stylesheets/UserInfoStyle.css'

const Userinfo : React.FC = () => {
    return (
        <div id='UserInfoContainer' className='w-full h-full border-inherit bg-gray-100'>
            <div id='UserContent' className='flex mx-auto h-5/6 bg-white'>
                <div id="UserInfos">
                <label htmlFor='milID' className='block' />
                <input id='milID' placeholder='군번' type='text' />
                <label htmlFor='milID' className='block' />
                <input id='milID' placeholder='군번' type='text' />
                <label htmlFor='milID' className='block' />
                <input id='milID' placeholder='군번' type='text' />
                <label htmlFor='milID' className='block' />
                <input id='milID' placeholder='군번' type='text' />
                <label htmlFor='milID' className='block' />
                <input id='milID' placeholder='군번' type='text' />
                <label htmlFor='milID' className='block' />
                <input id='milID' placeholder='군번' type='text' />
                </div>

                <div id="UserProfile">

                </div>
            </div>
        </div>
    )
}

export default Userinfo;