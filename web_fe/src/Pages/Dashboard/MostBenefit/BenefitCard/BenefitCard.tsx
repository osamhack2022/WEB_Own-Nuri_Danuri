import * as React from 'react';
import Modal from '../../../../Components/Modal/Modal';
import useModal from '../../../../Components/Modal/useModal';
import Post from '../../BenefitList/Post/Post';
import './BenefitCardStyle.css'

interface props {
    cardID?: number;
}

const BenefitCard: React.FC<props> = ({ cardID }) => {
    const { isPoped, togglePop } = useModal();
    if (cardID) {
        return (
            <>
                <button onClick={togglePop} className='block'><div id={'card' + cardID} className='w-20 h-20 duration-500 ease-linear rounded-md opacity-50 hover:w-40 hover:h-40 hover:opacity-100' /></button>
                <Modal isPoped={isPoped} togglePop={togglePop}>
                    <Post />
                </Modal>

            </>
        )
    }
    else
        return null;
}

export default BenefitCard;