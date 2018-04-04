
var all_filter = document.querySelector('input#allgenres');
var action_filter = document.querySelector('input#action');
var adventure_filter = document.querySelector('input#adventure');
var crime_filter = document.querySelector('input#crime');
var drama_filter = document.querySelector('input#drama');
var horror_filter = document.querySelector('input#horror');
var thriller_filter = document.querySelector('input#thriller');

var filter_button = document.querySelector('body>header>div>button');
var filter_show = document.querySelector('body>header>div>div');
var name = document.querySelector('body>header>div>button')
var iarticles;

function filter_functie() {
  filter_show.classList.toggle('filter_dropdown');
  filter_button.classList.toggle('arrow');
}


function all_functie() {
  all_filter.checked = true;
  var articles = document.querySelectorAll('article');
  filter_show.classList.remove('filternoshow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
    articles[iarticles].style.display = "block";

  }
}

function action_functie() {
  action_filter.checked = true;
  var articles = document.querySelectorAll('article');
  filter_show.classList.remove('filternoshow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
    if (articles[iarticles].classList.contains('Action')) {
      articles[iarticles].style.display = "block";
    } else {
      articles[iarticles].style.display = "none";
    }
  }
}

function adventure_functie() {
  adventure_filter.checked = true;
  var articles = document.querySelectorAll('article');
  filter_show.classList.remove('filternoshow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
    if (articles[iarticles].classList.contains('Adventure')) {
      articles[iarticles].style.display = "block";
    } else {
      articles[iarticles].style.display = "none";
    }
  }
}

function crime_functie() {
  crime_filter.checked = true;
  var articles = document.querySelectorAll('article');
  filter_show.classList.remove('filternoshow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
    if (articles[iarticles].classList.contains('Crime')) {
      articles[iarticles].style.display = "block";
    } else {
      articles[iarticles].style.display = "none";
    }
  }
}

function drama_functie() {
  drama_filter.checked = true;
  var articles = document.querySelectorAll('article');
  filter_show.classList.remove('filternoshow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
    if (articles[iarticles].classList.contains('Drama')) {
      articles[iarticles].style.display = "block";
    } else {
      articles[iarticles].style.display = "none";
    }
  }
}

function horror_functie() {
  horror_filter.checked = true;
  var articles = document.querySelectorAll('article');
  filter_show.classList.remove('filternoshow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
    if (articles[iarticles].classList.contains('Horror')) {
      articles[iarticles].style.display = "block";
    } else {
      articles[iarticles].style.display = "none";
    }
  }
}

function thriller_functie() {
  thriller_filter.checked = true;
  var articles = document.querySelectorAll('article');
  filter_show.classList.remove('filternoshow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
    if (articles[iarticles].classList.contains('Thriller')) {
      articles[iarticles].style.display = "block";
    } else {
      articles[iarticles].style.display = "none";
    }
  }
}

filter_button.addEventListener('click', filter_functie)

action_filter.addEventListener('click', action_functie);
adventure_filter.addEventListener('click', adventure_functie);
crime_filter.addEventListener('click', crime_functie);
drama_filter.addEventListener('click', drama_functie);
horror_filter.addEventListener('click', horror_functie);
thriller_filter.addEventListener('click', thriller_functie);
all_filter.addEventListener('click', all_functie);
