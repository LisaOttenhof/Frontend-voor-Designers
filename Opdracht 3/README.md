## Opdracht 3 - Film site met externe data

Voor opdracht 3 bestond uit een aantal punten. Het inladen van een JSON file met behulp van Javascript. Voldoen aan een aantal visual interface principles. Opdracht 1 (filteren) en opdracht 2 (carrousel) er in je ontwerp verwerken. Ik heb er voor gekozen om een filmsite te maken voor een desktop device.




### Versie 1, 2 & 3

Ik heb verschillende versies gemaakt om deze opdracht uit te voeren. In versie 1 heb ik gefocust op het inladen van de informatie uit de JSON file en de eerste opmaak van de filmsite. In versie twee heb ik de carousel toegevoegd aan mijn ontwerp en in versie 3 heb ik de filter en iconen aan de site toegevoegd.

> [Versie 1](https://lisaottenhof.github.io/Frontend-voor-Designers/Opdracht%203/versie%201) 

> [Versie 2](https://lisaottenhof.github.io/Frontend-voor-Designers/Opdracht%203/versie%202)

> [Versie 3](https://lisaottenhof.github.io/Frontend-voor-Designers/Opdracht%203/versie%203)

<img src=images/versie1.png width="315"> <img src=images/versie2.png width="270"> <img src=images/versie3.png width="270"> 

Na de derde versie ben ik gaan testen en heb ik feedback gekregen. Uit de feedback kwamen een aantal punten naar voren.
Het zou leuk zijn als de indicator bolletjes bij de carousel ook klikbaar zouden worden. En het zou fijner zijn om naar te kijken als er nog animatie en transistie werd toegevoegd. Daarnaast wilde ik zelf de filter en de 'Meer informatie' button werkend maken.



### Versie 4, 5 & 6

> [Versie 4](https://lisaottenhof.github.io/Frontend-voor-Designers/Opdracht%203/versie%204)

Ik ben begonnen met het werkend maken van de filter en het toevoegen van animatie, dit heb ik gedaan in versie 4.

<img src=images/versie4.png width="400">  

> [Versie 5](https://lisaottenhof.github.io/Frontend-voor-Designers/Opdracht%203/versie%205)

Daarna ben ik verder gegaan met versie 5, in deze versie heb ik de indicators van de carousel klikbaar gemaakt.

<img src=images/versie5.png width="400">

> [Versie 6](https://lisaottenhof.github.io/Frontend-voor-Designers/Opdracht%203/versie%206)

In versie 6 heb ik 'Meer informatie' button werkend gemaakt. 

<img src=images/versie6-info.png width="400">



### Versie 7

Met deze 6de versie ben ik gaan testen. Uit deze testen kwam dat het verwarrend was dat de 'Meer informatie' button niet van tekst veranderde. Het leek daardoor als je niet weg kon uit meer informatie. Ook kreeg ik de feedback dat het vreemd was dat de 'Meer informatie' button opeens boven de tekst staat in plaats van onder de tekst, waar hij eerst ook staat. Dit heb ik ook aangepast. 

Deze feedback heb ik in de 7de versie verwerkt. In deze versie veranderd de tekst van de button in 'Minder informatie' en terug naar 'Meer informatie' als er op geklikt wordt. 

> [Versie 7](https://lisaottenhof.github.io/Frontend-voor-Designers/Opdracht%203/versie%207)

<img src=images/versie7.png> 

<img src=images/versie7-info.png width="430"> <img src=images/versie7-infolang.png width="430">


Omdat github geen JSON files met http ondersteund niet nogmaals de 7de versie mocht de github versie niet werken.

> [Versie 7](http://tomwesterhof.nl/frontend-lisa/)




## Principes toegepast

Tijdens deze opdracht heb ik rekening gehouden met 3 interface design principles. 



#### Principe 4: Keep users in control

Om te beginnen heb ik iconen aan het ontwerp toevoegd, deze iconen staan achter buttons en versterker de boodschap van de buttons en geven aan wat er gaat gebeuren als er op de button geklikt wordt. Een voorbeeld hiervan is de filter button. Als je  de filter ziet staat er een pijl-icoon achter wat naar benenden gericht is. Dit geeft aan dat de filter naar benenden zal uitklappen. Zodra er op de filter geklikt is en deze is uitgeklapt, draaid het pijltje 180 graden en staat het pijltje naar boven gericht zodat het duidelijk is dat als er nu op de knop geklikt wordt de filter weer inklapt. 

##### De carousel

In de carousel heb ik dit toegepast door de gebruiker meerdere manier te geven om door de carousel te kijken. Ik heb < vorige en volgende > button gemaakt, maar ook gezorgd dat de gebruiker door de carousel kan kijken met de pijltjes op zijn of haar toetsenbord. Daarnaast kan de bezoeker ook om de progress indicators klikken om de afbeeldingen in de carousel te bekijken. 

##### De films

Bij de films heb ik dit gedaan door in de articles de 'Meer informatie' button niet alleen een icoon te geven maar ook tekst die verteld wat er gebeurd als je op de button klikt. Het icoon versterkt deze boodschap. Ook als je op de button geklikt hebt, veranderd de tekst en het icoon om aan te geven wat de button doet en wat de gebruiker kan verwachten als hij op de button klikt. 


Om dit principe sterker toe te passen zou ik nog een loading state kunnen maken voor als de gegevens uit de JSON file inladen. 



#### Principe 9: Appearance follows behavior

##### De carousel

Voor dit principe heb ik de buttons bij de carousel zo ontworpen dat ze precies doet wat de gebruiker zal verwachten, de linker gaan een foto terug en de rechter een foto verder. Ook heb ik er voor gezorgd dat ze er uit zien als buttons. Deze buttons worden ook iets groter door middel van een animatie als de bezoeker over de knop hovert, om te laten zien dat ze klikbaar zijn. 
Daarnaast heeft de carousel een progress indicator die onder de carousel staat, deze indicator zorgt ervoor dat de gebruiker precies weet bij welke afbeelding in de carousel hij is. Daarnaast weet hij dankzij de progress indicator ook hoeveel afbeeldingen erin staan. De indicators zijn ook klikbaar om door de carousel heen te klikken. Om deze reden hebben de indicators dezelfde animatie als de 'vorige' en 'volgende' buttons als er over gehovert wordt, zodat de gebruiker de suggestie krijgt dat ze klikbaar zijn.   

##### De films

Bij het filmoverzicht heb ik dit principe ook toegepast. Ik heb de button voor Meer informatie niet het standaart button uiterlijk geven omdat ik wilde dat de button niet de aandacht van de informatie over de films af wil leiden. Om toch te laten zien dat deze buttons klikbaar zijn heb ik deze een animatie gegeven als de gebruiker over de buttons hover, de button wordt dan iets groter. Daarnaast heb ik een pijl-icoon toegevoegd zodat de gebruiker ziet dat er meer mogelijk is als er op de button geklikt wordt.

Als de gebruiker op 'Meer informatie' klikt veranderd de tekst van de button in 'Minder informatie' en veranders het icoon van een pijltje in een kruisje. Dit om te tonen dat de button er nu voor zorgt dat de extra informatie weer verdwijnd, zelfs als de gebruiker de tekst niet leest zorgt het icoon hier voor. 



#### Principe 11: Strong visual hierarchies work best

Voor principe 11 heb ik een aantal stappen gezet. Om te beginnen heb ik een header toegevoegd aan de films site, zodat de gebruiker altijd weet op welke site hij of zij is. Ook heb ik kopjes toegevoegd in de pagina boven de carousel, popular movies, en boven het film overzicht, all movies. Dit heb ik gedaan om de gebruiker te laten zien wat er zichtbaar is op de pagina en waar ze op dat moment naar kijken. 

##### De films

Ook in de articles van de films heb ik visual hierarchie toegepast. De titel van de film is bold, groter dan de andere tekst en staat bovenaan het article. Ook de afbeelding is groot en trekt meteen de aandacht van de gebruiker. 
Daarnaast heb ik de genres en de release date bold gemaakt om meer hierarchie toe te passen en hier aandacht op te richten. Ook de button voor Meer informatie is bolder dan de normale tekst, dit om aandacht op de button te richten.  

Ook heb ik de extra informatie hierachrie gegeven door bold tussen kopjes toe te voegen. Dit zorgt er voor dat de bezoeker niet tegen één grote lap tekst aan kijkt maar overzichtelijk ziet welke informatie er op deze pagina staat.
