import React from "react"
import MyLogo from "./logo/logo"
import MyList from "./list/list"

const Navbar = ({active}) => {
    return(
        <div className="w-ful p-5 relative z-[1000] bg-white shadow">
            <div className="mx-auto w-[90%] bg-white flex justify-between items-center">
                <MyLogo />
                <MyList active={active} />
            </div>
        </div>
    )
}

export default Navbar