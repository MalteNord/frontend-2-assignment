import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Terms(){
    return (
<>
<div className="font-poppins container mx-auto mt-8">
<h1 className="text-3xl">Köpvillkor hos oss på TV-Specialisterna</h1>
<div className="mt-2">
        <p className="text-lg"> 
        Välkommen till TV-Specialisterna! Nedan finner du våra köpvillkor som reglerar ditt användande av vår webbplats och dina köp hos oss. Genom att göra ett köp accepterar du dessa villkor, så vänligen läs igenom dem noggrant.
        </p>
        <p>
        <strong>
        <p className="text-3xl mt-2">Priser och betalning</p>
        </strong>
        <ul>
            <li><strong>1.1 Priser: </strong>Alla priser anges i svenska kronor (SEK) och inkluderar moms. Eventuella fraktkostnader läggs till vid kassan.</li>
            <li><strong>1.2 Betalning: </strong>Vi accepterar betalning via de vanligaste betalningsmetoderna, såsom kreditkort, faktura eller direkt banköverföring.</li>
        </ul>
        <br />
        <strong>
        <p className="text-3xl mt-2">2. Beställning och leverans</p>
        </strong>
        <ul>
            <li><strong>2.1 Beställningsbekräftelse: </strong>När du har slutfört ditt köp skickas en beställningsbekräftelse till den e-postadress du angav vid köpet.</li>
            <li><strong>2.2 Leveranstid: </strong>Vi strävar efter att leverera dina varor så snart som möjligt. Leveranstiden kan variera beroende på produkt och ort.</li>
            <li><strong>2.3 Leveranskostnader: </strong>Leveranskostnader beror på vald fraktmetod och visas tydligt vid kassan.</li>
        </ul>
        <br />
        <strong>
        <p className="text-3xl mt-2">3. Ångerrätt och returer</p>
        </strong>
        <ul>
            <li><strong>3.1 Ångerrätt: </strong>Du har rätt att ångra ditt köp inom 14 dagar från det att du mottog varan. Se vår separata returpolicy för mer information.</li>
            <li><strong>3.2 Reklamation och Garanti: </strong>Vid fel eller brister i levererad vara, vänligen kontakta vår kundtjänst för reklamation och garantihantering.</li>
        </ul>
        <br />
        <strong>
        <p className="text-3xl mt-2">4. Personuppgifter</p>
        </strong>
        <ul>
        <li><strong>4.1 Dataskydd: </strong>Vi behandlar dina personuppgifter i enlighet med gällande lagstiftning. Läs vår integritetspolicy för mer information.</li>
        </ul>
        <br />
        <strong>
        <p className="text-3xl mt-2">5. Ansvarsbegränsning</p>
        </strong>
        <ul>
            <li><strong>5.1 Produktinformation: </strong>Vi strävar efter att ge så exakt och tydlig produktinformation som möjligt. Eventuella felaktigheter eller förändringar kan förekomma.</li>
            <li><strong>5.2 Force Majeure: </strong>Vi är inte ansvariga för händelser utanför vår kontroll, såsom strejk, krig eller naturkatastrofer.</li>
        </ul>
        <br />
        <strong>
        <p className="text-3xl mt-2">6. Kontaktinformation</p>
        </strong>
        Om du har några frågor angående returer eller behöver ytterligare hjälp, tveka inte att kontakta vår kundtjänst <Link to="/contact" className="hover:underline"><strong>här</strong></Link>.
        <br />
        <br />
        Tack för att du väljer TV-Specialisterna!
        </p>

    </div>
</div>  
</>
    );
}

export default Terms;