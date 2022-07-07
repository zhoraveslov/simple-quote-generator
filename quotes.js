const getQuoteBtn = document.querySelector('.getQuoteBtn')
let quoteText = document.querySelector('#js-quote-text');
let quoteAuthor = document.querySelector('#js-quote-author');
let quoteSource = document.querySelector('#js-quote-source');
getQuoteBtn.addEventListener('click', getQuote)

async function getQuote() {
    fetch('https://stoic-server.herokuapp.com/random')
        .then((response) => response.json())
        .then((data) => {

            quoteText.textContent = (data[0]['body'])
            quoteAuthor.textContent = (data[0]['author'])
            quoteSource.textContent = (data[0]['quotesource'])
        });

}
getQuote()