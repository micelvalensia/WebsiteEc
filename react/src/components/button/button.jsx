import React from "react";


const Button = () => {
    const {diKlik, teks} = props;
    return (
        <button className="bg-blue-600 rounded-xl py-2 px-4 text-white" onClick={diKlik}>{teks}</button>
    )
}

export default Button