import * as React from 'react';
import './PostPreviewStyle.css';
import { HiOutlineGift } from 'react-icons/hi'

interface Props {
    id: number;
    title: string;
    type: string
    author: string;
    period: string;
    like: number;
    comment: number;
}

const PostPreview: React.FC<Props> = ({id, title, type, author, period, like, comment}) => {
    return (
        <div id='PostPreview' className='flex items-center w-full bg-green-300'>
            <button id='PPDibs' className='block bg-red-100'><HiOutlineGift /></button>
            <div id='PPTitle' className='bg-red-300'>{title}{type}</div>
            <div id='PPAuthor' className='bg-red-500'>{author}</div>
            <div id='PPPeriod' className='bg-red-600'>{period}</div>
            <div id='PPLike' className='bg-red-700'>{like}</div>
            <div id='PPComment' className='bg-red-900'>{comment}</div>
        </div>
    );
}

export default PostPreview;``