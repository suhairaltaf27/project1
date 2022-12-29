// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector('.person');

const quotes = [{
    quote : `“Be yourself; everyone else is already taken.”`,
    person: `― Oscar Wilde`},

    {quote : `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: `― Albert Einstein`},

    {quote : `“So many books, so little time.”`,
    person: `― Frank Zappa`,
}];

btn.addEventListener('click',function(){
    let random  = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

