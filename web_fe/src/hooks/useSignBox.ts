import * as React from 'react';

export enum SignBoxType {
    Certificate,
    LogIn
}

interface Inputs {
    milID : string;
    pw : string;
}

const initailInputs : Inputs = {
    milID : '',
    pw : '',
}

interface useSignBoxReturnType {
    inputs : Inputs;
    onChange : () => void;
}

const useSignBox : React.FC<useSignBoxReturnType> = () => {
    const [inputs, setInputs] = React.useState<Inputs>(initailInputs);

    const onChange = () => {

    };

    return { inputs, onChange }
};

export default useSignBox;