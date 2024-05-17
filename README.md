# Currency Converter

## Description

This is a simple web application that allows you to convert values between different currencies. This project is built with HTML, CSS, and JavaScript, providing an intuitive interface for users to select source and destination currencies, enter a value, and get the conversion result, using an API to get the exchange rate.

## Functionality

The logic behind the Currency Converter is relatively straightforward:

1. **Updating Currency Options**: When the application loads, it populates the dropdown menus for selecting source and destination currencies. This is achieved by iterating over a predefined list of currency codes and adding each one as an option in the dropdown menus.

2. **Fetching Exchange Rates**: When the user clicks the "Convert" button, the application fetches the current exchange rate between the selected source and destination currencies. This is done using the AwesomeAPI, which provides the exchange rate in JSON format. The application constructs the API request URL based on the selected currencies and sends a request to retrieve the exchange rate.

3. **Performing the Conversion**: After fetching the exchange rate, the application calculates the converted value by multiplying the user-inputted amount by the exchange rate. The result is then displayed to the user, showing how much the inputted amount in the source currency is equivalent to in the destination currency.

4. **Error Handling**: If there is an issue with fetching the exchange rate (e.g., network problems or invalid API responses), the application logs an error message to the console. This helps in diagnosing issues with the API requests.

5. **User Interaction**: The interface allows users to easily select currencies, input a value, and perform the conversion with a single button click. The result is displayed in a clear and readable format on the screen.

## Contribution

Feel free to contribute if you'd like to improve the project! Here are some improvement ideas you may consider:

- Add More Currencies: Update the currencies array in updateCurrencyOptions to include more currency options.
- Error Handling: Improve error handling in the getExchangeRate function to provide better feedback to users.
- UI Enhancements: Enhance the user interface with additional features or improved design elements.
- Optimizations: Optimize the JavaScript code for better performance and readability.

## Testing

If you want to test, here is the url for it: https://matheuscampagnolo.github.io/Currency-Converter/

## Credits

This project uses the awesomeAPI to fetch real-time exchange rates for the currency conversion feature. We thank the awesomeAPI team for providing a reliable service that enhances the functionality of our application.

## License

This project is licensed under the [MIT License](LICENSE), which means you can use, modify, and distribute the code freely as long as you include the original license and acknowledge the project contributors.
