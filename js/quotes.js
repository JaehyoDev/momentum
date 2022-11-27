const quotes = [
  {
    quote: "a",
    author: "a author",
  },
  {
    quote: "b",
    author: "b author",
  },
  {
    quote: "c",
    author: "c author",
  },
  {
    quote: "d",
    author: "d author",
  },
  {
    quote: "e",
    author: "e author",
  },
  {
    quote: "f",
    author: "f author",
  },
  {
    quote: "g",
    author: "g author",
  },
  {
    quote: "h",
    author: "h author",
  },
  {
    quote: "i",
    author: "i author",
  },
  {
    quote: "j",
    author: "j author",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 반올림 Math.round
// 올림 Math.ceil
// 내림 Math.floor

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
