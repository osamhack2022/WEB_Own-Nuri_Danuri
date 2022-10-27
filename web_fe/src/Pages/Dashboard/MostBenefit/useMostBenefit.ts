import * as React from 'react';

interface useMostBenefitReturn {
    slideNum : number;
    slideRight: ()=>void;
    slideLeft: ()=>void;
}

function useMostBenefit() : useMostBenefitReturn {
    const [slideNum, setSlideNum] = React.useState(1);

    function slideRight(){ 
        if(slideNum !== 3){
            setSlideNum((prev)=>prev+1);
        }
    }

    function slideLeft(){ 
        if(slideNum !== 1){
            setSlideNum((prev)=>prev-1);
        }
    }

    return {slideNum, slideRight, slideLeft}
}

export default useMostBenefit;