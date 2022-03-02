import { tokens_buy } from "./sourceJS/token_store.js.js";

let mainArea = document.querySelector("main");

/* films.forEach(function(film) {
    let filmDiv = document.createElement("div")
    let filmTitle = document.createElement("h1")
    let filmCrawl = document.createElement("p")

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
}); */

tokens_buy.forEach(function(reward) {
  let personDiv = document.createElement("div");
  let name = document.createElement("h1");
  //let homeworld = document.createElement("h3")
  let pic = document.createElement("img");

  name.textContent = person.name;

  //let webNum = getWebNumber(person.homeworld)
  //homeworld.textContent = person.homeworld

  let webNum = getWebNumber(person.url);
  pic.src = `https://starwars-visualguide.com/assets/img/characters/${webNum}.jpg`;

  personDiv.appendChild(name);
  //personDiv.appendChild(homeworld)
  personDiv.appendChild(pic);

  mainArea.appendChild(personDiv);
});

function getWebNumber(webURL) {
  let end = webURL.lastIndexOf("/");
  let webID = webURL.substring(end - 2, end);
  if (webID.indexOf("/") !== -1) {
    return webID.slice(1, 2);
  } else {
    console.log(webID);
    return webID;
  }
}
