import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Main_page : React.FC = () => {
    return (
        <div id="Main_page_container" className='bg-red-500'>
            <h1>This is Main_page</h1>
            <NavLink to="/login"><button className='inline-block bg-red-300'>Get Started!</button></NavLink>
        </div>
    )
}

export default Main_page;