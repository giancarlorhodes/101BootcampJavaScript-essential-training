/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */


class _Image{
  constructor(
    inUri,
    inDescription
  ) {
    this.uri = inUri;
    this.description = inDescription;   
  }
}
 
// define inline object
 const image1 = {
   uri: "https://www.w3schools.com/js/objectExplained.gif",
   description: "add a image description here"
  };


  const image2 = new _Image("https://www.w3schools.com/js/objectExplained.gif", "a car on w3 schools");
 
 // exercise 08_09 practice 
// main function
function createArticle(obj)
{

  let _figure = createFigure(obj);

  let _article = 
  `<article>
    <h1>${obj.description}</h1>   
    ${_figure} 
  </article>`;
  return _article;

}


function createFigure(obj)
{
 
  let _content = 
  `<figure>
    <img src="${obj.uri}" alt="${obj.description}"/> 
    <figcaption>${obj.description}</figcaption>
  </figure>`;

  return _content;

}

 const _markup = createArticle(image1); 

 const content = 
  `<main>
     ${_markup}
   </main>
 `;
 
 document.body.innerHTML = content;
 
 console.log("image1:", image1);
 console.log("image2:", image2);
 