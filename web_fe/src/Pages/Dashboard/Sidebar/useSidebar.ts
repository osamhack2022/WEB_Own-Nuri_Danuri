import * as React from 'react';

export enum BoardState {
    UserInfo = 0,
    MostBenefits,
    BenefitList,
    Hosting
}

const ThemeColor: string[] = ['amber-400', 'emerald-400', 'violet-400', 'rose-400'];

interface useSidebarReturn {
    isShowed: boolean;
    toggleShowed: () => void;

    boardState: BoardState;
    toggleState: (state: BoardState) => void;
    themeColor: string;
}

function useSidebar(): useSidebarReturn {
    const [isShowed, setShowed] = React.useState(true);
    function toggleShowed() { setShowed((prev) => !prev) }

    const [boardState, setState] = React.useState(BoardState.MostBenefits);
    function toggleState(state: BoardState) { setState(state); }
    
    const [themeColor, setThemeColor] = React.useState(ThemeColor[boardState]);
    React.useEffect(()=>{
        setThemeColor(ThemeColor[boardState]);
    }, [boardState])

    return { isShowed, toggleShowed, boardState, toggleState, themeColor };
}

export default useSidebar;