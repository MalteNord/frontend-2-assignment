import React, { useContext } from "react";
import "../index.css"

import { CartContext } from "../App";

function NewCart(){
    const cart = useContext(CartContext)
    return (
        <>
        <div>
        <div>
                
        </div>
            <div className="font-poppins fixed justify-end">
                <h3>Din Varukorg</h3>
                <div>
                <button>-</button>
                <button>+</button>
                </div>
                <p>Totalsumma</p>
            </div>

        </div>

        </>
    )
}

export default NewCart;