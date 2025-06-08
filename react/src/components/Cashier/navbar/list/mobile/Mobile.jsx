import React, { useState } from "react";
import { Link } from "react-router";


const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center space-x-6 lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={openNav}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <ul
                className={`space-y-2 fixed left-0 w-full bg-white h-[350px] z-50 flex flex-col items-center justify-around shadow-2xl transition-all duration-300 ease-in-out ${
                    isOpen ? "top-[77px]" : "top-[-450px]"
                }`}
            >
                <li className="text-gray-700 text-xl animate-fade-in">-Menu-</li>
                <Link to={'/'} className="text-gray-700 text-lg animate-fade-in">Home</Link>
                <Link to={'/menu'} className="text-gray-700 text-lg animate-fade-in delay-100">Menu</Link>
                <Link to={'/cart'} className="text-gray-700 text-lg animate-fade-in delay-200">Cart</Link>
            </ul>
        </div>
    );
};

export default Mobile;
