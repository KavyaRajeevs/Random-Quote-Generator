/*const quote = document.getElementById("quote");
const author = document.getElementById("author");
btn.addEventListener('click',handleClick)

btn.addEventListener("click",handleClick)
function handleClick(){
    fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(json => console.log(json))
    quote.innerHTML=json.quote
    author.innerHTML=json.author
}

handleClick();
*/




function getQuote(){
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
       console.log(data);
       const quote=data.quote;
       const author=data.author;

       const quoteElement = document.getElementById("quote");
       const authorElement = document.getElementById("author");

       quoteElement.textContent=quote;
       authorElement.textContent="-"+author;
    })
    .catch(error => {
       console.error('Error:', error);
    });
   

}
getQuote();       