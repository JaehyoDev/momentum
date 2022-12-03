const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Success is walking form failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
  },
  {
    quote: "I don't dream at night. I dream at day. I dream for a living.",
    author: "Steven Spielberg",
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nie percent perspiration.",
    author: "Thomas Edison",
  },
  {
    quote: "I want to put a ding in the universe.",
    author: "Steve Jobs",
  },
  {
    quote: "Patience is bitter, but its fruit is sweet.",
    author: "Aristotle",
  },
  {
    quote:
      "If you run you stand a chance of losing, but if you don't run you've already lost.",
    author: "Barack Obama",
  },
  {
    quote:
      "They always say time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol",
  },
  {
    quote:
      "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
    author: "Socrates",
  },
];

const quote = document.querySelector("#quote__content");
const author = document.querySelector("#quote__author");

// 반올림 Math.round
// 올림 Math.ceil
// 내림 Math.floor

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
