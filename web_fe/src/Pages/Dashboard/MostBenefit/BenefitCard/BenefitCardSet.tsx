import * as React from 'react';
import BenefitCard from './BenefitCard';

interface props {
    id1: number;
    id2?: number;
    id3?: number;
}

const BenefitCardSet : React.FC<props> = ({id1, id2, id3}) => {
    return (
        <div id='CardSet' className='flex'>
            <BenefitCard cardID={id1} />
            <BenefitCard cardID={id2} />
            <BenefitCard cardID={id3} />
        </div>
    );
}

export default BenefitCardSet;