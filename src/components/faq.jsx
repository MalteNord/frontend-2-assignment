import React from "react";
import "../index.css"
import { Link } from "react-router-dom";

function FAQ(){
    return(
<>
<div className="font-poppins container mx-auto mt-8">
    <h1 className="flex justify-center font-poppins text-3xl">FAQ</h1>
<p className="font-poppins">
<strong>
    <p>1. Vilka typer av TV-skärmar erbjuder ni?</p>
</strong>
   - Vi erbjuder ett brett utbud av TV-skärmar, inklusive LED, OLED, QLED och Smart-TV-skärmar i olika storlekar och modeller från ledande tillverkare.
<br />
<br />

<strong>
    <p>2. Vad är skillnaden mellan LED, OLED och QLED TV-skärmar?</p>
</strong>
- LED använder bakgrundsbelysning, medan OLED har organiska pixlar som ger bättre kontrast och färg. QLED använder kvantprickteknik för förbättrad färg och ljusstyrka.
<br />
<br />

<strong>
    <p>3. Hur väljer jag rätt storlek på TV-skärmen?</p>
</strong>
- Det beror på din rumstorlek och personliga preferenser. Vi erbjuder storleksrekommendationer efter förfrågan.
<br />
<br />

<strong>
    <p>4. Har ni Smart-TV-skärmar?</p>
</strong>
- Ja, vi har ett stort utbud av Smart-TV-skärmar som ger tillgång till appar, streamingtjänster och internet direkt från din TV.
<br />
<br />

<strong>
    <p>5. Vad är skillnaden mellan 4K och Full HD?</p>
</strong>
- 4K har en högre upplösning än Full HD, vilket ger skarpare och mer detaljerad bildkvalitet. Det är idealiskt för större TV-skärmar.
<br />
<br />

<strong>
    <p>6. Erbjuder ni installationstjänster för TV-skärmar?</p>
</strong>
- Vi erbjuder inte direktinstallationstjänster, men vi tillhandahåller detaljerade bruksanvisningar och support för att underlätta installationsprocessen.
<br />
<br />

<strong>
    <p>7. Vad är er returpolicy?</p>
</strong>
- Vi erbjuder en 30-dagars returpolicy för oöppnade och oskadade produkter.
<br />
<br />

<strong>
    <p>8. Har ni garanti på era TV-skärmar?</p>
</strong>
- Ja, vi erbjuder garantier på våra TV-skärmar. Vanligtvis håller garantin 1 år efter köp.
<br />
<br />

<strong>
    <p>9. Kan jag få teknisk support om jag har problem med min TV-skärm?</p>
</strong>
- Absolut! Kontakta vår kundtjänst för teknisk support via <Link to="/contact" className="hover:underline"><strong>kontakt</strong></Link>, och vårt team kommer att hjälpa dig att lösa eventuella problem.
<br />
<br />

<strong>
    <p>10. Hur gör jag för att spåra min beställning?</p>
</strong>
- Du kan spåra din beställning via spårningslänken som medkommer din orderbekräftelse när din beställning skickas.

</p>
</div>
</>
    );
}

export default FAQ;