const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
  "The best error message is the one that never shows up. - Thomas F. Watson",
  "Code tells you how, comments tell you why. - Jeff Atwood",
  "Programming is not about typing, it’s about thinking. - Rich Hickey",
  "It’s harder to read code than to write it. - Joel Spolsky",
  "Don't worry if it doesn't work right. If everything did, you'd be out of a job. - Mosher's Law of Software Engineering",
  "The function of good software is to make the complex appear to be simple. - Grady Booch",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "Code refactoring is like doing the dishes. It’s never done; you just reach a point where you can stop. - Unknown",
  "The best way to predict the future is to invent it. - Alan Kay",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Programming isn’t about what you know; it’s about what you can figure out. - Chris Pine",
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupéry",
  "Coding is not just code, that is a live thing to serve everyone! - Ming Song",
  "The only code that is easy to change is the code you write yourself. - Martin Fowler",
  "The purpose of software engineering is to control complexity, not to create it. - Pamela Zave",
  "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
  "Real artists ship. - Steve Jobs",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra",
  "Coding is like love; it starts with clear intentions, but it can get complicated. - Unknown",
  "To iterate is human, to recurse divine. - L. Peter Deutsch",
  "Software is a great combination of artistry and engineering. - Bill Gates",
  "The only code that is bug-free is no code at all. - Wayne Ratliff",
  "The more code you have, the more places there are for bugs to hide. - Rich Skrenta",
  "The best programs are the ones written when the programmer is supposed to be working on something else. - Melinda Varian",
  "Coding is not just code; it's solution to a problem. - Abhijit Naskar",
  "If you think math is hard, try web design. - Trish Parr",
  "Good code is its own best documentation. - Steve McConnell",
  "Programming can be fun, and so can cryptography; however, they should not be combined. - Kreitzberg and Shneiderman",
  "Code is where the real bugs live. - Earl Derr Biggers",
  "To understand recursion, one must first understand recursion. - Unknown",
  "I’m not a great programmer; I’m just a good programmer with great habits. - Kent Beck",
  "The only thing more costly than learning from experience is not learning from experience. - Archibald Putt",
  "In software systems, it is often the early bird that makes the worm. - Alan Perlis",
  "A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder",
  "The purpose of coding is to create valuable software. - Unknown",
  "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
  "The art of coding is to make complex things simple, not the other way around. - John Romero",
  "Coding is like cooking; sometimes you follow a recipe, and sometimes you experiment with ingredients. - Unknown",
  "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
  "The best error message is the one that never shows up. - Thomas F. Watson",
  "The most important thing in programming is naming. A good name is more important than good code. - R. C. Martin",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "The only code that is bug-free is no code at all. - Wayne Ratliff",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Coding is not just code; it's solution to a problem. - Abhijit Naskar",
  // 49 coding quotes
];

const quote = [
  // ... (your array of quotes)
];

let lastQuote = null; // Initialize lastQuote variable

function generateQuote() {
  for (let i = quotes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
  }
}

function displayQuote() {
  generateQuote(); // Shuffle the quotes array

  const newQuote = quotes[0];

  // Check if there was a previous quote
  if (lastQuote !== null) {
    // Check if the new quote is the same as the last one
    if (newQuote === lastQuote) {
      // If it is the same, shuffle the array again
      return displayQuote();
    }
  }

  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = newQuote; // Display the new quote

  // Set a default font size for both mobile and larger screens
  quoteElement.style.fontSize = window.innerWidth <= 480 ? "16px" : "24px";

  // Update the lastQuote variable
  lastQuote = newQuote;
}
