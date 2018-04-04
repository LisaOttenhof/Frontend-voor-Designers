
var filter_button = document.querySelector('body>header>div>button');
var filter_show = document.querySelector('body>header>div>div');
var name = document.querySelector('body>header>div>button')
var iarticles;

function filter_functie() {
  filter_show.classList.toggle('filter_dropdown');
  filter_button.classList.toggle('arrow');
}

filter_button.addEventListener('click', filter_functie)
