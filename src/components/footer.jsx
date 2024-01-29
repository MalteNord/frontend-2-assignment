import React from "react";
import "../index.css"

function Footer(){
    return(
        <>


<footer className="bg-white rounded-lg shadow m-4 font-poppins mt-20">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between font-poppins">
      <span className="text-sm text-gray-500 sm:text-center">© 2024 TV-Specialisterna™. All Rights Reserved.
    </span> 
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
            <a href="/about" className="hover:underline me-4 md:me-6">Om oss</a>
        </li>
        <li>
            <a href="/faq" className="hover:underline me-4 md:me-6">FAQ</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline">Kontakt</a>
        </li>
    </ul>
    </div>
</footer>

        </>
    );
}

export default Footer;