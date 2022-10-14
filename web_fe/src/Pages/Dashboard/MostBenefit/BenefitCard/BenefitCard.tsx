import * as React from 'react';
import './BenefitCardStyle.css'

interface props {
    cardID : number;
}

const BenefitCard: React.FC<props> = ({ cardID }) => {
    return (
        <div id="BenefitCardContainer" className='w-1/5 flex h-full justify-between'>

            <div id="BenefitCardText" className="bg-orange-300">
            </div>

            <div id='BenefitCardImage' className=''></div>
        </div>
    )
}

export default BenefitCard;