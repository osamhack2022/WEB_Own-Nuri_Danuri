import * as React from 'react';
import './ModalStyle.css';

interface Props {
    children : React.ReactNode;
    isPoped : boolean;
    togglePop : ()=>void;
}

const Modal: React.FC<Props> = ({children, isPoped, togglePop}) => {
    if(isPoped){
        return (
            <div id='ModalContainer' className='fixed w-full h-screen top-0 left-0'>
                <div id='ModalContent' className='absolute top-1/2 left-1/2 w-fit h-fit'>
                    {children}
                    <button onClick={togglePop}>닫기</button>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Modal;