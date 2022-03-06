import { tokens_buy } from "./token_store.js.js";

let displayArea = document.getElementById("display");
console.log(tokens_buy.reward);

tokens_buy.forEach(tokenItem => {
  let rewardDiv = document.createElement("div");
  let name = document.createElement("h1");
  let cost = document.createElement("h3");
  let reserve = document.createElement("p");
  let pic = document.createElement("img");

  let ifReserved = isReserved(tokenItem);
  reserve.textContent = ifReserved;

  name.textContent = tokenItem.reward;

  cost.textContent = tokenItem.tokenCost + " tokens";

  pic.src = tokenItem.pic;

  rewardDiv.appendChild(pic);
  rewardDiv.appendChild(name);
  rewardDiv.appendChild(cost);
  rewardDiv.appendChild(reserve);

  displayArea.appendChild(rewardDiv);
});




function isReserved(tokens) {
  let thing = tokens.reserved;
  if (thing != null) {
    return "Item reserved by " + tokens.reserved_by;
  } else {
    return "not reserved";
  }
}
