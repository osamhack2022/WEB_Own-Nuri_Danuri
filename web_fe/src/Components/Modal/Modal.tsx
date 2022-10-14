import * as React from 'react';
import './ModalStyle.css';

interface Props {
    children : React.ReactNode;
}

const Modal: React.FC<Props> = ({children}) => {
    return (
        <div id='ModalContainer' className='fixed w-full h-screen top-0 left-0'>
            <div id='ModalContent' className='absolute top-1/2 left-1/2 w-fit h-fit'>
                {children}
            </div>
        </div>
    );
}

export default Modal;