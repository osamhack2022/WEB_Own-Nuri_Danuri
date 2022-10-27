import * as React from 'react';
import './ModalStyle.css';

interface Props {
    children: React.ReactNode;
    isPoped: boolean;
    togglePop: () => void;
}

const Modal: React.FC<Props> = ({ children, isPoped, togglePop }) => {
    if (isPoped) {
        return (
            <div id='ModalContainer' className='fixed w-full h-full top-0 left-0'>
                <div onClick={togglePop} className='fixed w-full h-full top-0 left-0' />

                <div id='ModalContent' className='absolute top-1/2 left-1/2'>
                    {children}
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Modal;