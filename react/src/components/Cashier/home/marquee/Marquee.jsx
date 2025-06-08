import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden relative flex w-[80%] mx-auto [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="py-5 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">Mau makan apa hari ini?</span>
            <span className="text-4xl mx-4">Ayam goreng terlezat dibumi!</span>
            <span className="text-4xl mx-4">Es jeruk termanis yang dibuat dengan cinta</span>
            <span className="text-4xl mx-4">Harga terjangkau yang aman dengan kantong</span>
            <span className="text-4xl mx-4">Ayam Goreng? Nasi Goreng? Mie Goreng? kami punya semua!!</span>
        </div>

        <div className="absolute top-0 py-5 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-4">Mau makan apa hari ini?</span>
            <span className="text-4xl mx-4">Ayam goreng terlezat dibumi!</span>
            <span className="text-4xl mx-4">Es jeruk termanis yang dibuat dengan cinta</span>
            <span className="text-4xl mx-4">Harga terjangkau yang aman dengan kantong</span>
            <span className="text-4xl mx-4">Ayam Goreng? Nasi Goreng? Mie Goreng? kami punya semua!!</span>
        </div>
    </div>
  );
};

export default Marquee;
