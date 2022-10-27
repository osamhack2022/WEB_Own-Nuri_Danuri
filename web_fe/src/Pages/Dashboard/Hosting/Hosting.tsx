import * as React from 'react'
import './HostingStyle.css'
import Editor from '../../../Components/Editor/Editor';

const Hosting: React.FC = () => {
    return (
        <div id='HostingContainer' className='w-full h-full bg-white overflow-hidden'>
            <Editor />

            <div id='HostButton'>게시하기</div>
        </div>
    )
}

export default Hosting;