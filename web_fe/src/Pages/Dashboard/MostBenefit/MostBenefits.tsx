import * as React from 'react'
import BenefitCard from './BenefitCard/BenefitCard';
import './MostBenefitsStyle.css';

import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import BenefitCardSet from './BenefitCard/BenefitCardSet';
import useMostBenefit from './useMostBenefit';


const MostBenfits: React.FC = () => {
    const {slideNum, slideRight, slideLeft} = useMostBenefit();

    return (
        <div id='MostBenefitContainer' className='overflow-hidden relative h-full bg-white'>

            <div id={`Slide${slideNum}`} className='MostBenefitSlide absolute h-1/3 flex bg-gray-100'>
                <BenefitCardSet id1={1} id2={2} id3={3} />
                <BenefitCardSet id1={4} id2={5} id3={6} />
                <BenefitCardSet id1={7} />
            </div>

            <div id='MostBenefitController' className='absolute bottom-8 right-10 w-20 rounded-full text-sm'>
                <button onClick={slideLeft}><MdOutlineArrowLeft className='text-3xl'/></button>
                <div className='mt-1'>{slideNum}/3</div>
                <button onClick={slideRight}><MdOutlineArrowRight className='text-3xl'/></button>
            </div>
        </div>
    )
}

export default MostBenfits;