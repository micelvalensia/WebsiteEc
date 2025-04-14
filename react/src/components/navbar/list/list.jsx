import React from "react";
import Mobile from "./mobile/Mobile";
import { Link } from "react-router";

const MyList = ({active}) => {
    return (
        <>
            <ul className="w-[40%] hidden lg:flex justify-evenly items-center font-medium">
                <Link to={'/'} className={`cursor-pointer ${active === "home" ? "border-b-2" : "relative before:absolute before:content-[''] before:w-[0] before:transition-all before:border-b-2 before:h-full hover:before:w-full transition-all"}`}>Home</Link>
                <Link to={'/menu'}
                className={`cursor-pointer ${active === "menu" ? "border-b-2" : "relative before:absolute before:content-[''] before:w-[0] before:transition-all before:border-b-2 before:h-full hover:before:w-full transition-all"}`}
                >
                Menu
                </Link>
                <Link to={'/cart'}
                className={`cursor-pointer ${active === "cart" ? "border-b-2" : "relative before:absolute before:content-[''] before:w-[0] before:transition-all before:border-b-2 before:h-full hover:before:w-full transition-all"}`}
                >
                Cart
                </Link>
            </ul>
            <Mobile />
        </>
    )
}

export default MyList