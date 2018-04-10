
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
    var h42 = document.createElement('h4');
    var img = document.createElement('img');
    var p = document.createElement('p');
    var footer = document.createElement('footer');
    var h5 = document.createElement('h5');
    var footer2 = document.createElement('footer');
    var h52 = document.createElement('h5');
    var footer3 = document.createElement('footer');
    var footer4 = document.createElement('footer');
    var footer5 = document.createElement('footer');
    var footer6 = document.createElement('footer');
    var button = document.createElement('button');

    h3.textContent = filmsElement[i].title;
    h4.textContent = filmsElement[i].genres;
    h42.textContent = filmsElement[i].release_date;
    img.src = filmsElement[i].cover;
    p.textContent = filmsElement[i].simple_plot;
    footer.textContent = filmsElement[i].plot;
    h5.textContent = "Director";
    footer2.textContent = filmsElement[i].directors[0].name;
    h52.textContent = "Actors";
    footer3.textContent = filmsElement[i].actors[0].actor_name + " plays " + filmsElement[i].actors[0].character;
    footer4.textContent = filmsElement[i].actors[1].actor_name + " plays " + filmsElement[i].actors[1].character;
    footer5.textContent = filmsElement[i].actors[2].actor_name + " plays " + filmsElement[i].actors[2].character;
    footer6.textContent = filmsElement[i].actors[3].actor_name + " plays " + filmsElement[i].actors[3].character;
    button.textContent = 'Meer informatie';


    article.classList = filmsElement[i].genres[0] + ' ' + filmsElement[i].genres[1] + ' ' + filmsElement[i].genres[2] + ' ' + filmsElement[i].genres[3];

    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h42);
    article.appendChild(img);
    article.appendChild(p);
    article.appendChild(footer);
    article.appendChild(h5);
    article.appendChild(footer2);
    article.appendChild(h52);
    article.appendChild(footer3);
    article.appendChild(footer4);
    article.appendChild(footer5);
    article.appendChild(footer6);
    article.appendChild(button);

    section.appendChild(article);
  }
  meerinfo_function()
}

function meerinfo_function(){
  var buttons = document.querySelectorAll('body>section>article>button');


  for (var i = 0; i < buttons.length; i++){
    buttons[i].nummer = i;

    buttons[i].addEventListener('click', function (){
      var infonummer = this.nummer+1;
      var info = document.querySelector('body>section>article:nth-of-type('+infonummer+')>footer:first-of-type');
      info.classList.toggle('meerinfo');
      var regiseurh5 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>h5:first-of-type');
      regiseurh5.classList.toggle('regiseurh5');
      var regiseur = document.querySelector('body>section>article:nth-of-type('+infonummer+')>footer:nth-of-type(2)');
      regiseur.classList.toggle('regiseur');
      var acteursh5 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>h5:nth-of-type(2)');
      acteursh5.classList.toggle('acteursh5');
      var acteur1 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>footer:nth-of-type(3)');
      acteur1.classList.toggle('acteur1');
      var acteur2 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>footer:nth-of-type(4)');
      acteur2.classList.toggle('acteur2');
      var acteur3 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>footer:nth-of-type(5)');
      acteur3.classList.toggle('acteur3');
      var acteur4 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>footer:nth-of-type(6)');
      acteur4.classList.toggle('acteur4');
      var imgweg = document.querySelector('body>section>article:nth-of-type('+infonummer+')>img')
      imgweg.classList.toggle('imgweg');
      var h4weg1 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>h4:nth-of-type(1)');
      var h4weg2 = document.querySelector('body>section>article:nth-of-type('+infonummer+')>h4:nth-of-type(2)');
      h4weg1.classList.toggle('h4weg1');
      h4weg2.classList.toggle('h4weg2');
      var pweg = document.querySelector('body>section>article:nth-of-type('+infonummer+')>p');
      pweg.classList.toggle('pweg');
      var minderbtn = document.querySelector('body>section>article:nth-of-type('+infonummer+')>button');
      minderbtn.classList.toggle('minderinfo');

      if (minderbtn.classList.contains('minderinfo')) {
        minderbtn.innerHTML = "Minder informatie";
      } else {
        minderbtn.innerHTML = "Meer informatie";
      }
    });
  }
}
