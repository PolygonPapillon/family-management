import {tokens_buy} from "./JSobjects/token_store.js";
//console.log(tokens_buy);

let displayArea = document.getElementById("display");


/* function displayOne (entries) {
  let theFirstDiv = document.createElement("div");
  let theFirstName = document.createElement("h1");
  let theFirstCost = document.createElement("h3");
  let theFirstReserve = document.createElement("p");
  let theFirstPic = document.createElement("img");

  let ifReserved = isReserved(entries[0]);
  theFirstReserve.textContent = ifReserved;

  theFirstName.textContent = entries[0].reward;

  theFirstCost.textContent = entries[0].tokenCost + " tokens";

  theFirstPic.src = entries[0].pic;

  theFirstDiv.appendChild(theFirstPic);
  theFirstDiv.appendChild(theFirstName);
  theFirstDiv.appendChild(theFirstCost);
  theFirstDiv.appendChild(theFirstReserve);

  displayArea.appendChild(theFirstDiv);


}
displayOne(tokens_buy); */


tokens_buy.forEach(tokenItem => {
  let rewardDiv = document.createElement("div");
  let name = document.createElement("h2");
  let cost = document.createElement("h3");
  let reserve = document.createElement("p");
  let fig = document.createElement("figure");
  let pic = document.createElement("img");
  let link = document.createElement("a");

  link.className = "toAlert";

  let ifReserved = isReserved(tokenItem);
  reserve.textContent = ifReserved;

  name.textContent = tokenItem.reward;

  cost.textContent = tokenItem.tokenCost + " tokens";

  pic.src = tokenItem.pic;

  fig.appendChild(pic);
  link.appendChild(fig);
  link.appendChild(name);
  link.appendChild(cost);
  link.appendChild(reserve);
  rewardDiv.appendChild(link);

  displayArea.appendChild(rewardDiv);
});




function isReserved(tokens) {
  let thing = tokens.reserved;
  if (thing == true) {
    return "Item reserved by " + tokens.reserved_by;
  } else {
    return "Not reserved";
  }
}
