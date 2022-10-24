import * as React from 'react'
import './HostingStyle.css'
import Editor from '../../../Components/Editor/Editor';

const Hosting: React.FC = () => {
    return (
        <div id='HostingContainer' className='w-full h-full bg-white overflow-hidden'>
            <div id='EditorContainer' className='w-4/5'>
                <Editor />
            </div>
        </div>
    )
}

export default Hosting; ``