$(document).ready(function() {

  $('#another').click(function() {
    pickRandomQuote(everything)
  });
  
  $('#twitter').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text="'+quote+'" '+'- '+author);
  });
  
});

var everything = [
{
  quote:"Life is about making an impact, not making an income.",
  author:"Kevin Kruse"
},
{
  quote:"Whatever the mind of man can conceive and believe, it can achieve.",
  author:"Napoleon Hill"
},
  {
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein"
  },
  {
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein"
  }, 
  {
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein"
  },
  {
    quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author:"Robert Frost"
  },
  {
    quote:"I attribute my success to this: I never gave or took any excuse.",
    author:"Florence Nightingale"
  },
  {
    quote:"You miss 100% of the shots you don’t take.",
    author:"Wayne Gretzky"
  },
  {
    quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",
    author:"Amelia Earhart"
  },
  {
    quote:"Every strike brings me closer to the next home run.",
    author:"Babe Ruth"
  },
  {
    quote:"Definiteness of purpose is the starting point of all achievement.",
    author:"W. Clement Stone"
  },
  {
    quote:"Life isn’t about getting and having, it’s about giving and being.",
    author:"Kevin Kruse"
  },
  {
    quote:"Life is what happens to you while you’re busy making other plans.",
    author:"John Lennon"
  },
  {
    quote:"We become what we think about.",
    author:"Earl Nightingale"
  },
  {
    quote:"The most common way people give up their power is by thinking they don’t have any.",
    author:"Alice Walker"
  },
  {
    quote:"The mind is everything. What you think you become.",
    author:"Buddha"
  },
  {
    quote:"The best time to plant a tree was 20 years ago. The second best time is now.",
    author:"Chinese Proverb"
  },
  {
    quote:"An unexamined life is not worth living.",
    author:"Socrates"
  },
  {
    quote:"Eighty percent of success is showing up.",
    author:"Woody Allen"
  },
  {
    quote:"Your time is limited, so don’t waste it living someone else’s life.",
    author:"Steve Jobs"
  },
  {
    quote:"Winning isn’t everything, but wanting to win is.",
    author:"Vince Lombardi"
  },
  {
    quote:"I am not a product of my circumstances. I am a product of my decisions.",
    author:"Stephen Covey"
  }
]
var quote = "Happiness is only real when shared.";
var author = "Christopher Mccandless";
function pickRandomQuote(obj) {
  var result;
  var count = 0;
  for (var prop in obj)
    if (Math.random() < 1/++count)
      result = prop;
  quote = everything[result].quote;
  author = everything[result].author;
  $('#quote').html("<span id = \"marks\">\"</span>" + everything[result].quote + "<span id = \"marks\">\"</span>");
  $('#author').html("<span>-</span>" + everything[result].author);
  return result;
}
