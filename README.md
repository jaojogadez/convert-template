# Convert Template

This project is a simple currency converter web application that allows users to convert amounts from USD, EUR, GBP, or ARS to Brazilian Real (BRL).

## Features and Functionality

*   **Currency Conversion:** Converts amounts from USD, EUR, GBP, and ARS to BRL.
*   **User Input Validation:**  Restricts the input field to only accept numeric values.
*   **Real-time Update:** Dynamically updates the conversion rate description.
*   **Error Handling:** Provides alerts for invalid input or conversion errors.
*   **Clear Presentation:**  Displays the converted amount in a user-friendly format.

## Technology Stack

*   **HTML:**  Provides the structure of the web page ( `index.html` ).
*   **CSS:** Styles the web page ( `styles.css` - although the content of this file was not provided so styling is assumed ). Utilizes Bootstrap for layout and basic styling.
*   **JavaScript:**  Handles user interactions, currency conversion logic, and DOM manipulation ( `script.js` ).
*   **Bootstrap:** Used for responsive design and pre-built components.

## Prerequisites

To run this project, you need:

*   A web browser (Chrome, Firefox, Safari, etc.).
*   No server-side environment is strictly required, as it's a client-side application. However, a local web server can be used for development to avoid CORS issues with external APIs if you decide to integrate them later.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/jaojogadez/convert-template.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd convert-template
    ```

3.  **Open `index.html` in your web browser.** No additional installation is required since this is a client-side application.

## Usage Guide

1.  Open the `index.html` file in your web browser.
2.  Enter the amount you want to convert in the "Valor" input field.  Only numerical input is allowed.
3.  Select the currency you want to convert from the "Moeda" dropdown menu.
4.  Click the "Converter em reais" button.
5.  The converted amount will be displayed below the form. The exchange rate will also be shown.
6.  If an error occurs or the input is invalid, an alert message will be displayed.

## Code Explanation

### `index.html`

This file contains the HTML structure for the currency converter. It includes:

*   Links to Google Fonts for styling.
*   A link to the Bootstrap CSS framework from a CDN.
*   A link to a local `styles.css` stylesheet (assumed, content not provided).
*   The basic form elements: an input field for the amount, a select dropdown for the currency, and a button to trigger the conversion.
*   A footer element to display the exchange rate and the converted amount.
*   A script tag linking to the `script.js` file.

### `script.js`

This file contains the JavaScript logic for the currency converter.

*   **Currency Rates:** Defines the exchange rates for USD, EUR, GBP, and ARS relative to BRL.

    ```javascript
    const USD = 5.6
    const EUR = 6.19
    const GPB = 7.35
    const ARS = 0.0059
    ```

*   **DOM Elements:**  Selects and stores references to the HTML elements used in the script.

    ```javascript
    const form = document.querySelector("form")
    const input = document.getElementById("amount")
    const currency = document.getElementById("currency")
    const footer = document.querySelector("main footer")
    const description = document.getElementById("description")
    const result = document.getElementById("result")
    ```

*   **Input Validation:**  An event listener is attached to the input field to restrict input to only numerical values using a regular expression.

    ```javascript
    input.addEventListener("input", () => {
        const CaractersRegex = /\D+/g
        input.value = input.value.replace(CaractersRegex, "")
        footer.classList.remove("show-footer")
    })
    ```

*   **Form Submission:**  An event listener is attached to the form to prevent the default form submission behavior and trigger the currency conversion.  A `switch` statement is used to call the `convertCurrency` function with the appropriate currency rate based on the selected currency.

    ```javascript
    form.onsubmit = (e) => {
        e.preventDefault()
        switch(currency.value){
            case "USD":
                convertCurrency(input.value, USD, "US$")
                break
            case "EUR":
                convertCurrency(input.value, EUR, "€" )
                break
            case "GBP":
                convertCurrency(input.value, GPB, "£" )
                break
            case "ARS":
                convertCurrency(input.value, ARS, "$")
                break
        }
    }
    ```

*   **`convertCurrency` Function:**  This function performs the currency conversion, updates the description with the current exchange rate, and displays the result. It also includes error handling.

    ```javascript
    function convertCurrency(amount, price, symbol){
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        if (isNaN(total)){
            return alert("Por favor, digite o valor corretamente.")
        }
        result.innerHTML = `${formatCurrencyBRL(total).replace("R$", "")} Reais`
        footer.classList.add("show-footer")
    }
    ```

*   **`formatCurrencyBRL` Function:**  This function formats the currency value to the Brazilian Real (BRL) format.

    ```javascript
    function formatCurrencyBRL(value){
        return Number(value).toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL",
        })
    }
    ```

## API Documentation

This project does not have an external API.  All currency conversion logic is handled client-side. However, one could expand this project by fetching live currency data from an external API.

## Contributing Guidelines

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your forked repository.
5.  Submit a pull request to the main branch of the original repository.

## License Information

No license was specified for this project.  All rights are reserved unless otherwise specified.

## Contact/Support Information

For questions or support, please contact [jaojogadez](https://github.com/jaojogadez).