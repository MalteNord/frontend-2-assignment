import React, { useContext } from "react";
import { CartContext } from "../App";

function NewCart() {
    const { cart } = useContext(CartContext);

    return (
        <div className="font-poppins flex justify-end">
            <h3>Din Varukorg</h3>
            <div className="size-24">
                {cart.map((product, index) => (
                    <div key={index}>
                        <p><img src={import.meta.env.VITE_STRAPI_UPLOAD_URL + product.data.attributes?.Image?.data?.attributes?.url} alt="" /></p>
                        <p>{product.data.attributes?.Title}</p> 
                        <p>{product.data.attributes?.Price}:-</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default NewCart;
