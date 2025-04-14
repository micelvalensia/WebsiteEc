import React from "react";
import MyLayout from "../layouts/layout";
import Menus from "../components/menu/menus/Menus";
import Inform from "../components/menu/inform/Inform";

const MenuPage = () => {
    return (
        <MyLayout active={'menu'}>
            <div className="w-[90%] md:w-[80%] flex gap-10 flex-col md:flex-row min-h-[80svh] mx-auto">
                <Inform />
                <Menus />
            </div>
        </MyLayout>
    )
}

export default MenuPage