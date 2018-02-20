var kleurfilter_actief = document.querySelector('body>main>form>fieldset');

var kleur_alle = document.querySelector('body>main>form>fieldset>input:first-of-type');
var kleur_optie1 = document.querySelector('body>main>form>fieldset>input:nth-of-type(2)');
var kleur_optie2 = document.querySelector('body>main>form>fieldset>input:nth-of-type(3)');
var kleur_optie3 = document.querySelector('body>main>form>fieldset>input:nth-of-type(4)');
var kleur_optie4 = document.querySelector('body>main>form>fieldset>input:nth-of-type(5)');

var blauw1 = document.querySelector('body>main>section>div>img:first-of-type')
var rood1 = document.querySelector('body>main>section>div>img:nth-of-type(2)')
var groen1 = document.querySelector('body>main>section>div>img:nth-of-type(3)')
var rood2 = document.querySelector('body>main>section>div>img:nth-of-type(4)')
var geel1 = document.querySelector('body>main>section>div>img:nth-of-type(5)')
var geel2 = document.querySelector('body>main>section>div>img:nth-of-type(6)')
var groen2 = document.querySelector('body>main>section>div>img:nth-of-type(7)')
var rood3 = document.querySelector('body>main>section>div>img:nth-of-type(8)')
var blauw2 = document.querySelector('body>main>section>div>img:nth-of-type(9)')
var blauw3 = document.querySelector('body>main>section>div>img:nth-of-type(10)')
var groen3 = document.querySelector('body>main>section>div>img:nth-of-type(11)')
var geel3 = document.querySelector('body>main>section>div>img:nth-of-type(12)')


//---------- rood ----------//
function kleur_alle_functie() {
      rood1.style.display = "inline-block";
      rood2.style.display = "inline-block";
      rood3.style.display = "inline-block";
      groen1.style.display = "inline-block";
      groen2.style.display = "inline-block";
      groen3.style.display = "inline-block";
      geel1.style.display = "inline-block";
      geel2.style.display = "inline-block";
      geel3.style.display = "inline-block";
      blauw1.style.display = "inline-block";
      blauw2.style.display = "inline-block";
      blauw3.style.display = "inline-block";
}


//---------- alle ----------//
function kleur_optie1_functie() {
      kleurfilter_actief.classList.add('kleurfilter_actief');

      groen1.style.display = "none";
      groen2.style.display = "none";
      groen3.style.display = "none";
      geel1.style.display = "none";
      geel2.style.display = "none";
      geel3.style.display = "none";
      blauw1.style.display = "none";
      blauw2.style.display = "none";
      blauw3.style.display = "none";

      rood1.style.display = "inline-block";
      rood2.style.display = "inline-block";
      rood3.style.display = "inline-block";
}


//---------- groen ----------//
function kleur_optie2_functie() {
      kleurfilter_actief.classList.add('kleurfilter_actief');

      rood1.style.display = "none";
      rood2.style.display = "none";
      rood3.style.display = "none";
      geel1.style.display = "none";
      geel2.style.display = "none";
      geel3.style.display = "none";
      blauw1.style.display = "none";
      blauw2.style.display = "none";
      blauw3.style.display = "none";

      groen1.style.display = "inline-block";
      groen2.style.display = "inline-block";
      groen3.style.display = "inline-block";


}


//---------- geel ----------//
function kleur_optie3_functie() {
      kleurfilter_actief.classList.add('kleurfilter_actief');

      rood1.style.display = "none";
      rood2.style.display = "none";
      rood3.style.display = "none";
      groen1.style.display = "none";
      groen2.style.display = "none";
      groen3.style.display = "none";
      blauw1.style.display = "none";
      blauw2.style.display = "none";
      blauw3.style.display = "none";

      geel1.style.display = "inline-block";
      geel2.style.display = "inline-block";
      geel3.style.display = "inline-block";
}


//---------- blauw ----------//
function kleur_optie4_functie() {
      kleurfilter_actief.classList.add('kleurfilter_actief');

      rood1.style.display = "none";
      rood2.style.display = "none";
      rood3.style.display = "none";
      groen1.style.display = "none";
      groen2.style.display = "none";
      groen3.style.display = "none";
      geel1.style.display = "none";
      geel2.style.display = "none";
      geel3.style.display = "none";

      blauw1.style.display = "inline-block";
      blauw2.style.display = "inline-block";
      blauw3.style.display = "inline-block";
}


kleur_alle.addEventListener('click', kleur_alle_functie );
kleur_optie1.addEventListener('click', kleur_optie1_functie);
kleur_optie2.addEventListener('click', kleur_optie2_functie);
kleur_optie3.addEventListener('click', kleur_optie3_functie);
kleur_optie4.addEventListener('click', kleur_optie4_functie);
