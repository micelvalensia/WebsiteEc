import React from "react";

const Card = () => {
    const items = [{
        image: "/agor.jpg",
        text: "Menu makanan sehat 5 sempurna"
    },{
        image: "/agor.jpg",
        text: "Menu makanan sehat 5 sempurna"
    },{
        image: "/agor.jpg",
        text: "Menu makanan sehat 5 sempurna"
    },{
        image: "/agor.jpg",
        text: "Menu makanan sehat 5 sempurna"
    }]
    return (
        <>
            {items.map((o, i) => (
                <div className="w-[200px] h-auto flex flex-col bg-[#5f5f5f] rounded-3xl flex-auto overflow-hidden" key={i}>
                    <img src={`${o.image}`} className="w-full h-[75%] object-center object-cover" alt="" />
                    <details className="p-5">
                        <summary className="text-white cursor-pointer">Selengkapnya</summary>
                        <p className="text-white text-xs p-5">{o.text}</p>
                    </details>
                </div>
            ))}
        </>
    )
}

export default Card