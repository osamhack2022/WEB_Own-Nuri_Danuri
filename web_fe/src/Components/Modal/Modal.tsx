import * as React from 'react';
import './ModalStyle.css';

interface Props {
    children : React.ReactNode;
    isPoped : boolean;
}

const Modal: React.FC<Props> = ({children, isPoped}) => {
    if(isPoped){
        return (
            <div id='ModalContainer' className='fixed w-full h-screen top-0 left-0'>
                <div id='ModalContent' className='absolute top-1/2 left-1/2'>
                    {children}
                    {/* <button onClick={togglePop}>닫기</button> */}
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Modal;