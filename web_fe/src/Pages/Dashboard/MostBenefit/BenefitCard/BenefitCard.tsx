import * as React from 'react';
import './BenefitCardStyle.css'

interface props {
    cardID?: number;
}

const BenefitCard: React.FC<props> = ({ cardID }) => {
    if (cardID) {
        return (
            <button className='block'><div id={'card' + cardID} className='w-20 h-20 duration-500 ease-linear rounded-md opacity-50 hover:w-40 hover:h-40 hover:opacity-100' /></button>
        )
    }
    else
        return null;
}

export default BenefitCard;