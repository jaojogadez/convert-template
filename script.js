// Cotação de moedas
const USD = 5.6
const EUR = 6.19
const GPB = 7.35

// Elements
const form = document.querySelector("form") // formulário
const input = document.getElementById("amount") // input
const currency = document.getElementById("currency") // select
const footer = document.querySelector("main footer") // footer
const description = document.getElementById("description")
const result = document.getElementById("result")


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
            convertCurrency(input.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(input.value, EUR, "€" )
            break
        case "GBP":
            convertCurrency(input.value, GPB, "£" )
            break
    }
    //footer.classList.add("show-footer")
}

// Funciton to convert the currency
function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol)
    try {
        description.textContent = `${symbol} 1 = R$${price}` // atualiza a descrição automaticamente

        footer.classList.add("show-footer") // Exibe o footer
    } catch (error) {
        footer.classList.remove("show-footer") // Esconde o footer
        console.log(error)
        alert("Não foi possível converter. Por favor, tente novamente.")
        
    }
}


// função para fazer conta
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        
    })
}