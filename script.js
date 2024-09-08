// Cotação de moedas
const USD = 5.6
const EUR = 6.19
const GPB = 7.35

// Elements
const form = document.querySelector("form") // formulário
const input = document.getElementById("amount") // input
const currency = document.getElementById("currency") // select
const footer = document.querySelector("footer") // footer


// Pega o valor do Input enquanto o user digita e não deixa digitar caracteres, somente números
input.addEventListener("input", () => {
    const CaractersRegex = /\D+/g
    input.value = input.value.replace(CaractersRegex, "")
    footer.classList.remove("show-footer")
})

// Evento de envio do form
form.onsubmit = (e) => {
    e.preventDefault() // previne o recarregamento da tela
    //console.log(currency.value + " " + input.value)
    switch(currency.value){
        case "USD":
            input.value *= 5.6
            console.log(input.value, 5.6)
            break
    }
    footer.classList.add("show-footer")
}

// Funciton to convert the currency
function convertCurrency(input, price, symbol){
    
}