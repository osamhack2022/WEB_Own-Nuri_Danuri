import * as React from 'react';
import BenefitCard from './BenefitCard';

interface props {
    id1: number;
    id2?: number;
    id3?: number;
}

const BenefitCardSet : React.FC<props> = ({id1, id2, id3}) => {
    return (
        <div id='CardSet' className='flex w-1/3 h-full justify-around items-center'>

            <div className='block ml-4'><BenefitCard cardID={id1} /></div>
            <BenefitCard cardID={id2} />
            <div className='block ml-4'><BenefitCard cardID={id3} /></div>
        </div>
    );
}

export default BenefitCardSet;