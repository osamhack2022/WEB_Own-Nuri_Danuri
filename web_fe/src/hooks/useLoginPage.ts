import * as React from 'react';

interface useLoginPageReturnType {
    certificate: boolean;
    toggle: () => void;
}

function useLoginPage(): useLoginPageReturnType {
    const [certificate, setType] = React.useState<boolean>(true);

    function toggle() {
        setType((prev) => !prev);
    }

    return { certificate, toggle };
}

export default useLoginPage;