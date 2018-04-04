if (aangemaakt == 1){
  var button = document.querySelectorAl('section>article>button');
  var button_show = document.querySelectorAl('section>article>footer');

  function dropdown_functie(){
  button_show.classList.toggle('dropdown');
};

button.addEventListener('click', dropdown_functie);
