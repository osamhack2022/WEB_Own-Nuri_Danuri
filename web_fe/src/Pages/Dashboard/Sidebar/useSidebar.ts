import * as React from 'react';

export enum BoardState {
    UserInfo = 0,
    MostBenefits,
    BenefitList,
    Hosting
}

interface useSidebarReturn {
    isShowed: boolean;
    toggleShowed: () => void;

    boardState: BoardState;
    toggleState: (state: BoardState) => void;
}

function useSidebar(): useSidebarReturn {
    const [isShowed, setShowed] = React.useState(true);
    function toggleShowed() { setShowed((prev) => !prev) }

    const [boardState, setState] = React.useState(BoardState.MostBenefits);
    function toggleState(state: BoardState) { setState(state); }
    
    return { isShowed, toggleShowed, boardState, toggleState };
}

export default useSidebar;