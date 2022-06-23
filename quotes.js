const spinner = document.querySelector('#js-spinner');
const newQuoteButton = document.querySelector('.new-quote-button');
newQuoteButton.addEventListener('click', getQuote);


async function qetQuote() {
    spinner.classList.remove('hidden');
    newQuoteButton.disabled = true;

    try {
        const response = await fetch('https://stoic-server.herokuapp.com/random')
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayQuote(json.body);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote')
    } finally {
        // enable the quote button
        newQuoteButton.disabled = false;
        // add the "hidden" class back again
        spinner.classList.add('hidden');
    }


}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

getQuote();
