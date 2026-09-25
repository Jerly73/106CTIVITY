
const API_URL = "https://dummyjson.com/quotes/random";// This is the URL for the quote API
// This function fetches a random quote from the API and returns it as an object with text and author properties
export const getRandomQuote = async () => {
  const response = await fetch(API_URL);
//
  if (!response.ok) {
    throw new Error("API request failed.");
  }

  const data = await response.json();

  if (!data.quote || !data.author) {
    throw new Error("Invalid quote data received.");
  }

  return {
    text: data.quote,
    author: data.author,
  };
};