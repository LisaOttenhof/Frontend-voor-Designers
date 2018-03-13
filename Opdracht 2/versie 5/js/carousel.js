
var carouselbox = document.querySelector('.carouselbox');
var content = document.querySelectorAll('.carouselcontent img');
var aantal = content.length;

var fotohond = document.getElementById('fotohond');
var fotokat = document.getElementById('fotokat');
var fototijger = document.getElementById('fototijger');
var fotoleeuw = document.getElementById('fotoleeuw');

var volgende = document.querySelector('.volgende');
var vorige = document.querySelector('.vorige');

var nummer = 1;

var b1 = document.querySelector('main>section>div>p:nth-of-type(1)')
var b2 = document.querySelector('main>section>div>p:nth-of-type(2)')
var b3 = document.querySelector('main>section>div>p:nth-of-type(3)')
var b4 = document.querySelector('main>section>div>p:nth-of-type(4)')

function volgende_function(){
  if (nummer == 1){
    fotohond.classList.remove('zichtbarefoto');
    fotokat.classList.remove('volgendefoto');
    fotoleeuw.classList.remove('vorigefoto');
    fotohond.classList.add('vorigefoto');
    fotokat.classList.add('zichtbarefoto');
    fototijger.classList.add('volgendefoto');
    nummer++;
    b1.classList.remove('fotozichtbaar');
    b2.classList.add('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 2){
    fotokat.classList.remove('zichtbarefoto');
    fototijger.classList.remove('volgendefoto');
    fotohond.classList.remove('vorigefoto');
    fotokat.classList.add('vorigefoto');
    fototijger.classList.add('zichtbarefoto');
    fotoleeuw.classList.add('volgendefoto');
    nummer++;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.add('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 3){
    fototijger.classList.remove('zichtbarefoto');
    fotoleeuw.classList.remove('volgendefoto');
    fotokat.classList.remove('vorigefoto');
    fototijger.classList.add('vorigefoto');
    fotoleeuw.classList.add('zichtbarefoto');
    fotohond.classList.add('volgendefoto');
    nummer++;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.add('fotozichtbaar');
  }

  else if (nummer == 4){
    fotoleeuw.classList.remove('zichtbarefoto');
    fotohond.classList.remove('volgendefoto');
    fototijger.classList.remove('vorigefoto');
    fotoleeuw.classList.add('vorigefoto');
    fotohond.classList.add('zichtbarefoto');
    fotokat.classList.add('volgendefoto');
    nummer = 1;
    b1.classList.add('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }
}

function vorige_function(){
  if (nummer == 1){
    fotohond.classList.remove('zichtbarefoto');
    fotokat.classList.remove('volgendefoto');
    fotoleeuw.classList.remove('vorigefoto');
    fototijger.classList.add('vorigefoto');
    fotoleeuw.classList.add('zichtbarefoto');
    fotohond.classList.add('volgendefoto');
    nummer = 4;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.add('fotozichtbaar');
  }

  else if (nummer == 4){
    fotoleeuw.classList.remove('zichtbarefoto');
    fotohond.classList.remove('volgendefoto');
    fototijger.classList.remove('vorigefoto');
    fotokat.classList.add('vorigefoto');
    fototijger.classList.add('zichtbarefoto');
    fotoleeuw.classList.add('volgendefoto');
    nummer--;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.add('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 3){
    fototijger.classList.remove('zichtbarefoto');
    fotoleeuw.classList.remove('volgendefoto');
    fotokat.classList.remove('vorigefoto');
    fotohond.classList.add('vorigefoto');
    fotokat.classList.add('zichtbarefoto');
    fototijger.classList.add('volgendefoto');
    nummer--;
    b1.classList.remove('fotozichtbaar');
    b2.classList.add('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 2){
    fotokat.classList.remove('zichtbarefoto');
    fototijger.classList.remove('volgendefoto');
    fotohond.classList.remove('vorigefoto');
    fotoleeuw.classList.add('vorigefoto');
    fotohond.classList.add('zichtbarefoto');
    fotokat.classList.add('volgendefoto');
    nummer--;
    b1.classList.add('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }
}


volgende.addEventListener('click', volgende_function);
vorige.addEventListener('click', vorige_function);

window.addEventListener('keydown', function (e) {
  if (37 == e.keyCode) {
    vorige_function();
  }

  else if (39 == e.keyCode) {
    volgende_function();
  }
});
