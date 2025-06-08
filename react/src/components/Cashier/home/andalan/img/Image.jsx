import React from "react";

const ImageCon = () => {
    const items = [{
        image: "/agor.jpg",
        text: "Ayam Goreng"
    }, {
        image: "/nasgor.jpg",
        text: "Nasi Goreng"
    }, {
        image: "/migor.jpg",
        text: "Mie Goreng"
    },];

    return (
        <div className="flex w-full px-2 overflow-x-scroll anjay">
            {items.map((i, dex) => (
                <div className="flex flex-col items-center gap-2 min-w-[120px] sm:min-w-[150px]" key={dex}>
                    <img 
                        src={`${i.image}`} 
                        alt={i.text} 
                        className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-cover bg-center rounded-full shadow-2xl" 
                    />
                    <p className="text-xs sm:text-sm text-center">{i.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ImageCon;
