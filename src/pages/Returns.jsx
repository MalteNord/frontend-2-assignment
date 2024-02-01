import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Returns(){
    return (
<>
<div className="font-poppins container mx-auto mt-8">
    <h1 className="text-3xl">Returpolicy hos oss på TV-Specialisterna</h1>
    <div className="mt-2">
        <p className="text-lg"> 
        Välkommen till TV-Specialisterna! Vi strävar efter att erbjuda högkvalitativa produkter och en smidig shoppingupplevelse för våra kunder. Om du av någon anledning inte är helt nöjd med ditt köp, är vi här för att hjälpa dig med returer. Läs igenom vår returpolicy nedan och tveka inte att kontakta vår kundtjänst om du har några frågor.
        </p>
    </div>
    <div className="mt-2">
        <strong>
        <p className="text-3xl mt-2">Ångerrätt och returer</p>
        </strong>
    </div>
    <div>
        <p>
        <strong>
        <p className="text-lg mt-2">Ångerfrist</p>
        </strong>
        Du har rätt att ångra ditt köp inom 14 dagar från det att du mottog varan. Om du önskar returnera en produkt, vänligen kontakta vår kundtjänst inom denna period för att få instruktioner om hur du går tillväga.
        <br />
        <strong>
        <p className="text-lg mt-2">Återbetalning</p>
        </strong>
        När vi har mottagit och godkänt din retur, kommer återbetalning att behandlas inom 14 dagar. Återbetalningen kommer att göras med samma betalningsmetod som användes vid köpet, om inget annat avtalats.
        <br />
        <strong>
        <p className="text-lg mt-2">Returfrakt</p>
        </strong>
        Kunden står för returfrakten om det inte föreligger något fel på produkten eller om det inte är en garantiåtgärd.
        <br />
        <strong>
        <p className="text-3xl mt-2">Returprocess</p>
        </strong>
        <br />
        <ul>
        <li><strong>Kontakta Kundtjänst:</strong> Skicka ett e-postmeddelande till vår kundtjänst via vår <Link to="/contact" className="hover:underline"><strong>kontakt</strong></Link>-sida och uppge ditt ordernummer samt anledningen till returen. Vi kommer att svara så snart som möjligt med instruktioner för hur du returnerar produkten.</li>
        
        <li><strong>Förbered Produkten för Retur:</strong> Förpacka produkten på ett säkert sätt för att undvika skador under transport. Inkludera även originalförpackningen och alla tillbehör.</li>
        
        <li><strong>Skicka Tillbaka Produkten:</strong> Använd den rekommenderade fraktmetoden och spåra paketet för att säkerställa en säker retur. Adressen för retur skickas till dig av vår kundtjänst.</li>
        
        <li><strong>Vänta på Återbetalning:</strong> När vi har mottagit och godkänt returen, behandlar vi återbetalningen inom 14 dagar.</li>
        
        </ul>
        <br />
        <strong>
        <p className="text-lg mt-2">Undantag för ångerrätten</p>
        </strong>
        Vänligen observera att ångerrätten inte gäller för följande produkter:
        <br />
        Varor som har förseglats av hälsoskyddsskäl och där förseglingen har brutits efter leveransen.
        Varor som på grund av sin natur inte kan återsändas.
        <br />
        <br />
        <strong>
        <p className="text-lg mt-2">Kontakta oss</p>
        </strong>
        </p>
        Om du har några frågor angående returer eller behöver ytterligare hjälp, tveka inte att kontakta vår kundtjänst <Link to="/contact" className="hover:underline"><strong>här</strong></Link>.
        <br />
        <br />
        Tack för att du väljer TV-Specialisterna!


    </div>
</div>
</>
    );
}

export default Returns;