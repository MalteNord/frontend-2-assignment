import "../index.css"
import React from "react";

import { Link } from 'react-router-dom';


function Header(){
    return(
<header>
    <nav className="font-poppins px-4 py-4">
    <div className="text-2xl">
        <div className="flex justify-center">
            <ul className="mr-80">
            <li className="transition ease-in-out hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <Link to="/">Hem</Link>
            </li>
            </ul>
                <ul className="flex space-x-8">
                    <li className="transition ease-in-out hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <Link to="/products/0">Produkter</Link>

                    </li>
                    <li className="transition ease-in-out hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <Link to="/about"> Om oss</Link>
                    </li>
                    <li className="transition ease-in-out hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <Link to="/contact">Kontakt</Link>

                    </li>
                </ul>
                <ul className="ml-80">
                <li className="transition ease-in-out hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <Link to="/cart"><img className="size-10" src="src/assets/cart.png" alt="" /></Link>
                </li>
                </ul>


            </div>
    </div>
    </nav>
</header>
    );
};

export default Header;