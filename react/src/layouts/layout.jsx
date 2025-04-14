import React from "react";
import Navbar from "../components/navbar/Navbar";

const MyLayout = ({children, active}) => {
    return (
        <>
            <Navbar active={active}/>
            <div className={`w-full bg-[#f8f8f8] pt-4 pb-6 box-border`}>
                {children}
            </div>
        </>
    )
}

export default MyLayout