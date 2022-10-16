import * as React from 'react';
import './BenefitCardStyle.css'

interface props {
    cardID?: number;
}

const BenefitCard: React.FC<props> = ({ cardID }) => {
    if (cardID) {
        return (
            <div id={'card' + cardID} className='w-20 h-20 rounded-md' />
        )
    }
    else
        return null;
}

export default BenefitCard;