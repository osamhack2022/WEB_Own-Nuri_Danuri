import * as React from 'react';

interface useLoginBoxReturn {
    certificate: boolean;
    toggle: () => void;

    selectedStyle : string;
}

function useLoginPage(): useLoginBoxReturn {
    const selectedStyle = 'inline-block w-2/5 m-1 border-2 rounded-full text-white'

    const [certificate, setType] = React.useState<boolean>(true);
    function toggle() {
        setType((prev) => !prev);
    }

    return { certificate, toggle, selectedStyle };
}

export default useLoginPage;