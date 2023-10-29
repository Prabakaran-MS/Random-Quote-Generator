let author = document.getElementById('quoteAuthor');
let quote = document.getElementById('quoteText');

async function fetchData() {
    try {
        const response = await fetch('./quotes.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
}

const quoteData = fetchData();

function displayRandomQuote(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomData = data[randomIndex];
    quote.textContent = randomData.Quote;
    author.textContent = randomData.Author;
}

function generateQuote() {
    quoteData.then((data) => {
        displayRandomQuote(data);
    }).catch((error) => {
        console.error(error);
    });
}

quoteData.then(data => {
    displayRandomQuote(data);
});