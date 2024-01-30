import React from "react";
import "../index.css"
import Products from "./products";

function Home(){
    return(
<>
<div>
        <h1 className="text-3xl font-poppins mt-8 flex justify-center">Välkommen till TV-Specialisterna!</h1>
        <p className="flex justify-center text-lg">Din Destination för Kvalitativa TV-upplevelser!</p>
</div>
<div>
        <h1 className="text-3xl font-poppins mt-8 flex justify-center">Veckans nyheter!</h1>
                        {/* Här slänger vi in lite produkter */}
</div>
<div>
        <h1 className="text-3xl font-poppins mt-8 flex justify-center">Alla våra produkter</h1>
        <ul className="flex justify-center space-x-6 mt-2 font-poppins">
            <li className="transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110">
                <a href="">Budget-skärmar</a>
            </li>
        
            <li className="transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110">
                <a href="">Standard-skärmar</a>
            </li>

            <li className="transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110">
                <a href="">Premium-skärmar</a>
            </li>
        </ul>
                    {/* Det man klickar på visar olika produkter från strapi */}
</div>
</>
    );
}

export default Home;