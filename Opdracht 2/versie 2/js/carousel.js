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
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.add('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer++;
    b1.classList.remove('fotozichtbaar');
    b2.classList.add('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 2){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.add('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer++;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.add('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 3){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.add('zichtbaar');
    nummer++;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.add('fotozichtbaar');
  }

  else if (nummer == 4){
    fotohond.classList.add('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer = 1;
    b1.classList.add('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }
}

function vorige_function(){
  if (nummer == 1){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.add('zichtbaar');
    nummer = 4;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.add('fotozichtbaar');
  }

  else if (nummer == 4){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.add('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer--;
    b1.classList.remove('fotozichtbaar');
    b2.classList.remove('fotozichtbaar');
    b3.classList.add('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 3){
    fotohond.classList.remove('zichtbaar');
    fotokat.classList.add('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
    nummer--;
    b1.classList.remove('fotozichtbaar');
    b2.classList.add('fotozichtbaar');
    b3.classList.remove('fotozichtbaar');
    b4.classList.remove('fotozichtbaar');
  }

  else if (nummer == 2){
    fotohond.classList.add('zichtbaar');
    fotokat.classList.remove('zichtbaar');
    fototijger.classList.remove('zichtbaar');
    fotoleeuw.classList.remove('zichtbaar');
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
