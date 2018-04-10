
var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://tomwesterhof.github.io/Frontend-voor-Designers/Opdracht%203/v3/json/movies.json';
var request = new XMLHttpRequest();


request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
  var filmsElement =  request.response;

  for(var i = 0; i < filmsElement.length; i++){
    var article = document.createElement('article');
    var h3 = document.createElement('h3');
    var h4 = document.createElement('h4');
    var h41 = document.createElement('h4');
    var img = document.createElement('img');
    var p = document.createElement('p');
    var footer = document.createElement('footer');
    var button = document.createElement('button')

    h3.textContent = filmsElement[i].title;
    h4.textContent = filmsElement[i].genres;
    h41.textContent = filmsElement[i].release_date;
    img.src = filmsElement[i].cover;
    p.textContent = filmsElement[i].simple_plot;
    footer.textContent = filmsElement[i].plot;
    button.textContent = 'Meer informatie';

    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h41);
    article.appendChild(img);
    article.appendChild(p);
    article.appendChild(footer);
    article.appendChild(button);

    section.appendChild(article);

  }
}
