import * as React from 'react';

export enum BoardState {
    UserInfo = 0,
    MostBenefits,
    BenefitList,
    Hosting
}

const ThemeColor: String[] = ['#B8E8FC', '#9ED2C6', '#6E85B7', '#B1B2FF'];

interface useSidebarReturn {
    isShowed: boolean;
    toggleShowed: () => void;

    boardState: BoardState;
    toggleState: (state: BoardState) => void;
    getThemeColor: () => string;
}

function useSidebar(): useSidebarReturn {
    const [isShowed, setShowed] = React.useState(true);
    function toggleShowed() { setShowed((prev) => !prev) }

    const [boardState, setState] = React.useState(BoardState.MostBenefits);
    function toggleState(state: BoardState) { setState(state); }
    function getThemeColor() { return String(ThemeColor[boardState]); }

    return { isShowed, toggleShowed, boardState, toggleState, getThemeColor };
}

export default useSidebar;