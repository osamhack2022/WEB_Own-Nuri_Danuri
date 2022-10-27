import * as React from 'react';
import './PostStyle.css';

import { BiLike } from 'react-icons/bi'
import { HiOutlineGift } from 'react-icons/hi'
import Comment from './Comment'

const Post: React.FC = () => {
    return (
        <div id='Post' className='flex'>
            <div id='PostContent' className='w-1/2 h-full bg-white rounded-md mr-4 overflow-scroll'>
                <div className='w-44 h-44 rounded-md bg-blue-300 mx-auto my-8' />

                <div id='PostTitle' className='flex items-center w-full h-8 mb-8 bg-red-100'>
                    <h3 className='pt-1 w-2/3 h-full text-2xl indent-2 text-black'>2022 Demo Title</h3>
                    <button className='w-1/6 text-blue-500'><BiLike className='DibLogo'/>99+</button>
                    <button className='text-right w-1/6'><HiOutlineGift className='DibLogo text-yellow-500' /></button>
                </div>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>

            <div id='PostComment' className='w-1/2 h-full bg-white rounded-md ml-4 overflow-scroll'>
                <Comment />
            </div>
        </div>
    )
}

export default Post;