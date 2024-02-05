import React from "react";
import { Link } from 'react-router-dom';
import "../index.css"

function Footer(){
    return(
        <>


<footer className="bg-white rounded-lg shadow m-4 font-poppins mt-40">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between font-poppins">
      <span className="text-sm text-gray-500 sm:text-center">© 2024 TV-Specialisterna™. All Rights Reserved.
    </span> 
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">Om oss</Link>
        </li>
        <li>
            <Link to="/faq" className="hover:underline me-4 md:me-6">FAQ</Link>
        </li>
        <li>
            <Link to="/terms" className="hover:underline me-4 md:me-6">Villkor</Link>
        </li>
        <li>
            <Link to="/returns" className="hover:underline me-4 md:me-6">Returer</Link>
        </li>
        <li>
            <Link to="/checkout" className="hover:underline me-4 md:me-6">Checkout</Link>
        </li>
        <li>
            <Link to="/contact" className="hover:underline">Kontakt</Link>
        </li>

    </ul>
    </div>
</footer>

        </>
    );
}

export default Footer;