import * as React from 'react';

interface useSidebarReturn {
    isShowed: boolean;
    toggleShowed: () => void;
}

function useSidebar(): useSidebarReturn {
    const [isShowed, setShowed] = React.useState(true);

    function toggleShowed() { setShowed((prev) => !prev) }

    return { isShowed, toggleShowed };
}

export default useSidebar;