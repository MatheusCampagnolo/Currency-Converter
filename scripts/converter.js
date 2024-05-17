// Function to update currency options
function updateCurrencyOptions() {
    const currencies = ['USD', 'EUR', 'BRL', 'JPY']; // Add more currencies as needed
    const selectSource = document.getElementById('source-currency');
    const selectDestination = document.getElementById('destination-currency');

    currencies.forEach(currency => {
        selectSource.add(new Option(currency, currency));
        selectDestination.add(new Option(currency, currency));
    });
}

// Function to get the exchange rate from the AwesomeAPI
function getExchangeRate(sourceCurrency, destinationCurrency, callback) {
    const url = `https://economia.awesomeapi.com.br/last/${sourceCurrency}-${destinationCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data[`${sourceCurrency}${destinationCurrency}`].bid;
            callback(rate);
        })
        .catch(error => console.error('Error fetching exchange rate:', error));
}

// Function to convert the value
function convertCurrency() {
    const sourceCurrency = document.getElementById('source-currency').value;
    const destinationCurrency = document.getElementById('destination-currency').value;
    const value = document.getElementById('value').value;

    getExchangeRate(sourceCurrency, destinationCurrency, exchangeRate => {
        const convertedValue = value * exchangeRate;
        document.getElementById('result').textContent = `${value} ${sourceCurrency} is equal to ${convertedValue.toFixed(2)} ${destinationCurrency}`;
    });
}

// Add click event to the convert button
document.getElementById('convert').addEventListener('click', convertCurrency);

// Update currency options on page load
document.addEventListener('DOMContentLoaded', updateCurrencyOptions);
