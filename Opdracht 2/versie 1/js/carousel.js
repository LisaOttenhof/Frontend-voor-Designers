var carouselbox = document.querySelector('.carouselbox');
var content = document.querySelectorAll('.carouselcontent img');

var fotohond = document.getElementById('fotohond');
var fotokat = document.getElementById('fotokat');
var fototijger = document.getElementById('fototijger');
var fotoleeuw = document.getElementById('fotoleeuw');

var volgende = document.querySelector('.volgende');
var vorige = document.querySelector('.vorige');

var nummer = 1;
var aantal = content.length;

function volgende_function(){
  if (nummer == 1){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.add('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer++;
  }
  else if (nummer == 2){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.add('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer++;
  }
  else if (nummer == 3){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.add('zichtbaar');
    nummer++;
  }
  else if (nummer == 4){
    fotohond.classList.add('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer = 1;
  }
}

function vorige_function(){
  if (nummer == 1){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.add('zichtbaar');
    nummer = 4;
  }
  else if (nummer == 4){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.add('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer--;
  }
  else if (nummer == 3){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.add('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer--;
  }
  else if (nummer == 2){
    fotohond.classList.add('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer--;
  }
}

volgende.addEventListener('click', volgende_function);
vorige.addEventListener('click', vorige_function);
