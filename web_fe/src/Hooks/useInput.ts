import * as React from 'react';

// interface inputType {
//     name: string;
//     value: string;
// }

interface useInputReturn {
    inputs: object;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

function useInput(): useInputReturn {
    const [inputs, setInputs] = React.useState({});

    function onChange(e: React.FormEvent<HTMLInputElement>) {
        const { id, value } = e.currentTarget;

        setInputs({
            ...inputs,
            [id] : value
        })

        console.log(inputs);
    }

    return { inputs, onChange };
}

export default useInput;