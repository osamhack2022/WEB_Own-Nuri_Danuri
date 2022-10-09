import * as React from 'react';
import { Link } from 'react-router-dom';

export enum Type {
    SignIn,
    SignUp
}

interface props {
    type: Type
}

const SignBox: React.FC<props> = ({ type }) => {
    const pageName : string = type === Type.SignIn ? "Sign In" : "Sign Up";

    return (
        <div id="SignBox_container">
            <h1 className='m-5'>This is {pageName} Page!</h1>
            <button><Link to="/dashboard/mostbenefits">Summit</Link></button>
        </div>
    )
}

export default SignBox;