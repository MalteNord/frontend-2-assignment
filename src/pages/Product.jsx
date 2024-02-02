import React, {useEffect, useState} from "react";
import "../index.css"
import { Link } from "react-router-dom";

const Product = () => {
    return (
<>
<div className="font-poppins container mx-auto mt-8">
    <h1 className="text-3xl flex justify-center">Produkt</h1>
    <div className="flex justify-end text-2xl mt-40">
        <h2 className="">Lagerstatus</h2>
    </div>
    <div className="flex justify-end text-2xl">
        <p></p>
    </div>
    <div className="mt-60">
        <ul className="flex justify-center space-x-10">
            <li>Översikt</li>
            <button className="hover:underline">Lägg till i varukorg</button>
        </ul>
    </div>
</div>
</>
    )
}

export default Product;