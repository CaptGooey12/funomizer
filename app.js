function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//Beginning of Joke API Code
const jokeButton = document.getElementById('jokebtn');
const jokeAPI = 'https://icanhazdadjoke.com/';

jokeButton.addEventListener("click", getJoke);
function getJoke() {
  const jokeJSON = JSON.parse(httpGet(jokeAPI));
  console.log(jokeJSON.joke);
  document.getElementById('joke').innerHTML = jokeJSON.joke;
}

getJoke();
//End of Joke API Code



//Beginning of CATAAS API Code
const catButton = document.getElementById('catbtn');
const catAPI = 'https://api.thecatapi.com/v1/images/search?';
const catLoading = document.getElementById('catload');

catButton.addEventListener("click", getCat);
function getCat() {
  catLoading.style.display = 'block';
  const catJSON = JSON.parse(httpGet(catAPI));
  console.log(catJSON[0].url );
  document.getElementById('catimg').src = catJSON[0].url;
  catLoading.style.display = 'none';
}

getCat();
//End of CATAAS API Code