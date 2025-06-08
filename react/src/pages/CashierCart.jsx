import React from "react";
import MyLayout from "../layouts/layout";
import Total from "../components/Cashier/cart/Total";
import IsiCart from "../components/Cashier/cart/isiCart/IsiCart";

const CartPage = () => {
    return (
        <MyLayout active={'cart'}>
            <div className="flex flex-col md:flex-row gap-5 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                <IsiCart />
                <Total />
            </div>
        </MyLayout>
    )
}

export default CartPage