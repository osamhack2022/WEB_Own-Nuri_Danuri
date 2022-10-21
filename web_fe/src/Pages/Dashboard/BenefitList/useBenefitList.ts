import * as React from 'react';

export enum BenefitListType {
    all, mine, recommended, sortbyarmy 
}

interface useBenefitListReturn {
    listState : BenefitListType;
    toggleState : (state : BenefitListType) => void;
}

function useBenefitList () : useBenefitListReturn {
    const [listState, setState] = React.useState(BenefitListType.all);

    function toggleState(state : BenefitListType){
        setState(state);
    }

    return { listState, toggleState };
}

export default useBenefitList;