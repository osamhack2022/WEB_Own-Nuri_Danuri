import * as React from 'react'
import BenefitCard from './BenefitCard/BenefitCard';
import './MostBenefitsStyle.css';

import { HiOutlineChevronLeft, } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi2';
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

            <div id='MostBenefitController' className='absolute inline-block bg-red-500 bottom-8 right-8'>
                <button onClick={slideLeft}><HiOutlineChevronLeft className='white'/></button>
                <span>{slideNum}/3</span>
                <button onClick={slideRight}><HiOutlineChevronRight className='white'/></button>
            </div>
        </div>
    )
}

export default MostBenfits;