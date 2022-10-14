import * as React from 'react'
import BenefitCard from './BenefitCard/BenefitCard';
import './MostBenefitsStyle.css';

const MostBenfits: React.FC = () => {
    return (
        <div id='MostBenefitContainer' className='h-full bg-green-300'>
            <div id='MostBenefitSlide' className='h-full flex'>
                <BenefitCard cardID={1} />
                <BenefitCard cardID={2} />
                <BenefitCard cardID={3} />
                <BenefitCard cardID={4} />
                <BenefitCard cardID={5} />
            </div>

            <div id='MostBenefitController' className='fixed bg-red-500 bottom-1 right-1'>
                <button className='inline-bock'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </button>
                <span>1/5</span>
                <button className='inline-block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MostBenfits;