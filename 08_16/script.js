/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

const _backpackObjectArray = backpackObjectArray;

console.log(typeof _backpackObjectArray);


console.log("_backpackObjectArray: ", _backpackObjectArray);

const _mapit = _backpackObjectArray.map((y) => {

  //  body
  let _z = document.createElement("article");
 

  // example of article
  //<article>
  //<h2>Google Chrome</h2>
  //<p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  //</article>
 
  const content = `
  <figure class="backpack__image">
    <img src=${y.image} alt="" />
  </figure>
  <h1 class="backpack__name">${y.name}</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${
      y.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${
      y.color
    }</span></li>
    <li class="backpack__age">Age:<span> ${y.backpackAge()} days old</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${
      y.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${
      y.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${
      y.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
      y.lidOpen ? "open" : "closed"
    }</span></li>
  </ul>

  `;

  _z.innerHTML = content;


  return _z;

});

console.log("_mapit: ", _mapit);


const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);



// a is local variable of type article
_mapit.forEach((a) => {

  console.log("a: ", a);
  console.log(typeof a); // object
  main.append(a);

});

