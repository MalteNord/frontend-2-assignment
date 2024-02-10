import React from "react";
import "../index.css";
import FeaturedProducts from "../components/featuredproducts";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <img src="src\assets\HERO.avif" alt="" className="w-full relative"/>
        <h1 className="text-3xl font-poppins mt-8 flex justify-center absolute inset-x-0 top-32">
          Välkommen till TV-Specialisterna
        </h1>
        <p className="flex justify-center font-poppins text-lg mt-2 absolute inset-x-0 top-52">
          Din Destination för Kvalitativa TV-upplevelser
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-poppins mt-8 flex justify-center">
          Veckans nyheter
        </h1>
        <br />
        <FeaturedProducts />
        {/* Här slänger vi in lite produkter */}
      </div>
      <div className="font-poppins container mx-auto mt-8">
        <div className="mt-2">
          <strong>
            <h1 className="text-3xl font-poppins mt-8 flex justify-center">
              Vår vision
            </h1>
          </strong>
          <p className="text-lg mt-4 text-center">
            Vi strävar efter att vara din främsta destination för att hitta den
            perfekta TV-skärmen som matchar dina unika behov och önskemål. Genom
            att erbjuda en kombination av högkvalitativa produkter och
            förstklassig kundservice strävar vi efter att vara din pålitliga
            partner för alla dina TV-behov.
            <br />
            <br />
          </p>
          <p className="text-xl text-center">
              Tack för att du väljer TV-Specialisterna som din
              förtroendeingivande plats för TV-skärmar. Vi ser fram emot att
              vara en del av ditt hemmabioäventyr!
            </p>
        </div>
      </div>
    </>
  );
}

export default Home;
