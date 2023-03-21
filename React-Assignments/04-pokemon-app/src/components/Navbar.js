import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="z-50 fixed top-0 navbar w-full h-[60px] bg-[#eedaa8dd]">
        <div className="container mw-[1100px] my-0 mx-auto py-0 px-6 flex justify-start items-center h-[100%]">

            <div className={`nav-elements`}>
                <ul>
                    <li className="text-3xl font-['Oleo_Script'] text-[#596dd0] px-[6rem]">
                        <NavLink to='/'>Pokemon go..</NavLink>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>
    );
};

export default Navbar;