import * as React from 'react'
import BenefitCard from './BenefitCard/BenefitCard';
import './MostBenefitsStyle.css';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import BenefitCardSet from './BenefitCard/BenefitCardSet';

const MostBenfits: React.FC = () => {
    return (
        <div id='MostBenefitContainer' className='h-full bg-green-300'>
            
            <div id='MostBenefitSlide' className='h-1/3 flex bg-green-500'>
                <BenefitCardSet id1={1} id2={2} id3={3} />
                <BenefitCardSet id1={4} id2={5} id3={6} />
                <BenefitCardSet id1={7} />
            </div>

            <div id='MostBenefitController' className='fixed bg-red-500 bottom-1 right-1'>
                
                <button><HiOutlineChevronLeft className='text-white/></button>
                <span>1/5</span>
                <button> <HiOutlineChevronRight className='text-white /></button>

            </div>
        </div>
    )
}

export default MostBenfits;