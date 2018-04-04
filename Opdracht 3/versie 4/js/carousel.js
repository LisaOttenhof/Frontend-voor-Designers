
var carousel = document.querySelector('.carouselbox');

var foto1 = document.getElementById('foto1');
var foto2 = document.getElementById('foto2');
var foto3 = document.getElementById('foto3');

var volgende = document.querySelector('.volgende');
var vorige = document.querySelector('.vorige');

var nummer = 1;

var bol1 = document.getElementById('bol1')
var bol2 = document.getElementById('bol2')
var bol3 = document.getElementById('bol3')

//================================== buttons functies ==================================


//================= volgende functie =================

function volgende_function(){
  if (nummer == 1){
    foto1.classList.remove('vorigefoto');
    foto2.classList.remove('zichtbarefoto');
    foto3.classList.remove('volgendefoto');
    foto1.classList.add('volgendefoto');
    foto2.classList.add('vorigefoto');
    foto3.classList.add('zichtbarefoto');
    nummer++;
    bol1.classList.remove('indicator');
    bol2.classList.add('indicator');
    bol3.classList.remove('indicator');
  }

  else if (nummer == 2){
    foto1.classList.remove('volgendefoto');
    foto2.classList.remove('vorigefoto');
    foto3.classList.remove('zichtbarefoto');
    foto1.classList.add('zichtbarefoto');
    foto2.classList.add('volgendefoto');
    foto3.classList.add('vorigefoto');
    nummer++;
    bol1.classList.remove('indicator');
    bol2.classList.remove('indicator');
    bol3.classList.add('indicator');
  }

  else if (nummer == 3){
    foto1.classList.remove('zichtbarefoto');
    foto2.classList.remove('volgendefoto');
    foto3.classList.remove('vorigefoto');
    foto1.classList.add('vorigefoto');
    foto2.classList.add('zichtbarefoto');
    foto3.classList.add('volgendefoto');
    nummer = 1;
    bol3.classList.remove('indicator');
    bol2.classList.remove('indicator');
    bol1.classList.add('indicator');
  }
}

//================= vorige functie =================

function vorige_function(){
  if (nummer == 1){
    foto1.classList.remove('vorigefoto');
    foto2.classList.remove('zichtbarefoto');
    foto3.classList.remove('volgendefoto');
    foto1.classList.add('zichtbarefoto');
    foto2.classList.add('volgendefoto');
    foto3.classList.add('vorigefoto');
    nummer = 3;
    bol1.classList.remove('indicator');
    bol2.classList.remove('indicator');
    bol3.classList.add('indicator');
  }

  else if (nummer == 3){
    foto1.classList.remove('zichtbarefoto');
    foto2.classList.remove('volgendefoto');
    foto3.classList.remove('vorigefoto');
    foto1.classList.add('volgendefoto');
    foto2.classList.add('vorigefoto');
    foto3.classList.add('zichtbarefoto');
    nummer--;
    bol3.classList.remove('indicator');
    bol2.classList.add('indicator');
    bol1.classList.remove('indicator');
  }

  else if (nummer == 2){
    foto1.classList.remove('volgendefoto');
    foto2.classList.remove('vorigefoto');
    foto3.classList.remove('zichtbarefoto');
    foto1.classList.add('vorigefoto');
    foto2.classList.add('zichtbarefoto');
    foto3.classList.add('volgendefoto');
    nummer--;
    bol2.classList.remove('indicator');
    bol2.classList.remove('indicator');
    bol1.classList.add('indicator');

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
