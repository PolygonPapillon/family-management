import { tokens_buy } from "./token_store.js.js";

let mainArea = document.querySelector("main");

tokens_buy.forEach(function (tokens_buy) {
  let rewardDiv = document.createElement("div");
  let name = document.createElement("h1");
  let cost = document.createElement("h3");
  let reserve = document.createElement("p");
  let pic = document.createElement("img");

  let ifReserved = isReserved(tokens_buy);
  reserve.textContent = ifReserved;

  name.textContent = tokens_buy.reward;

  cost.textContent = tokens_buy.tokenCost + " tokens";

  pic.src = tokens_buy.pic;

  rewardDiv.appendChild(pic);
  rewardDiv.appendChild(name);
  rewardDiv.appendChild(cost);
  rewardDiv.appendChild(reserve);

  mainArea.appendChild(rewardDiv);
});

function isReserved(tokens) {
  let thing = tokens.reserved;
  if (thing != null) {
    return "Item reserved by " + tokens.reserved_by;
  } else {
    return "not reserved";
  }
}
