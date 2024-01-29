import "../index.css"
import React from "react";
import { Link } from 'react-router-dom';


function Header(){
    return(
<header>
    <nav className="font-poppins bg-cyan border-gray-200 px-4 py-4">
    <div className="text-2xl">
        <div className="flex justify-center">
                <ul className="flex space-x-8">
                    <li className="transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <a href="/">Hem</a>
                    </li>
                    <li className="transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <a href="/about">Om oss</a>
                    </li>
                    <li className="transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 hover:text-gray-dark">
                        <a href="/contact">Kontakt</a>
                    </li>
                </ul>
            </div>
    </div>
    </nav>
</header>
    );
};

export default Header;