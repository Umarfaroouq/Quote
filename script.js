// Get references to HTML elements
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// API endpoint for fetching a random quote
const api_url = "https://api.quotable.io/random";

// Asynchronous function to fetch a quote from the API
async function getQuote(url) {
  // Fetch data from the API
  const response = await fetch(url);
  // Parse the response as JSON
  var data = await response.json();

  // Update HTML elements with the fetched quote and author
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

// Initial call to fetch and display a quote when the page loads
getQuote(api_url);

// Function to open a new window for tweeting the current quote and author
function tweet() {
  // Open a new Twitter window with a pre-populated tweet text
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by" + author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
