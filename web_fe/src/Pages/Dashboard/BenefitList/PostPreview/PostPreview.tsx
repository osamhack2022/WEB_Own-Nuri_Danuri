import * as React from 'react';
import './PostPreviewStyle.css';
import { HiOutlineGift } from 'react-icons/hi'
import Modal from '../../../../Components/Modal/Modal';
import useModal from '../../../../Components/Modal/useModal';

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
    const { isPoped, togglePop } = useModal();
    return (
        <>
        <div id='PostPreview' onClick={togglePop} className='flex items-center w-full'>
            <button id='PPDibs' className=''><HiOutlineGift className='DibLogo'/></button>
            <div id='PPTitle' className=''>{title}</div>
            <div id='PPAuthor' className=''>{author}</div>
            <div id='PPPeriod' className=''>{period}</div>
            <div id='PPLike' className='text-blue-500'>{like}</div>
            <div id='PPComment' className='text-blue-500'>{comment}</div>
        </div>

        <Modal isPoped={isPoped} togglePop={togglePop}>{null}</Modal>
        </>
    );
}

export default PostPreview;