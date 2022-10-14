import * as React from 'react';

interface useModalReturn {
    isPoped : boolean;
    togglePop : () => void;
}

function useModal() : useModalReturn {
    const [isPoped, setPop] = React.useState(false);

    function togglePop() {
        setPop((prev)=>!prev);
    }

    return {isPoped, togglePop};
}

export default useModal;