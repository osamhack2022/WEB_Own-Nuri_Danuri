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
        <div id='PostPreview' className='flex items-center w-full'>
            <HiOutlineGift />
            <div>{title}{type}</div>
            <div>{author}</div>
            <div>{period}</div>
            <div>{like}</div>
            <div>{comment}</div>
        </div>
    );
}

export default PostPreview;