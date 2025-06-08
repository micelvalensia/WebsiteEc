import React from "react";

const Button = ({ diKlik, teks, warna, mousein }) => {
  return (
    <button
      className={`${warna} rounded-xl py-1 px-4 text-white cursor-pointer hover:opacity-80`}
      onClick={diKlik}
    >
      {teks}
    </button>
  );
};

export default Button;
