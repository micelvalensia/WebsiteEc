import React from "react";
import { createContext, useState } from "react";

export const MenuContext = createContext();
export const ListContext = createContext();

export const MenuProvider = ({children}) => {
    const [type, setType] = useState("makanan");

    return(
        <MenuContext.Provider value={{type, setType}}>
            {children}
        </MenuContext.Provider>
    )
}

export const ListProvider = ({children}) => {
    const [list, setList] = useState([])

    return(
        <ListContext.Provider value={{list, setList}}>
            {children}
        </ListContext.Provider>
    )
}