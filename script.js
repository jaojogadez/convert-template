// Cotação de moedas
const USD = 5.6
const EUR = 6.19
const GPB = 7.35
const ARS = 0.0059

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
        case "ARS":
            convertCurrency(input.value, ARS, "$")
            break
    }
    //footer.classList.add("show-footer")
}

// Funciton to convert the currency
function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol)
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}` // atualiza a descrição automaticamente

        let total = amount * price // Calcula o total
        console.log(`Total: ${total}`)

        // Verifica se o total não é um número
        if (isNaN(total)){
            return alert("Por favor, digite o valor corretamente.")
        }

        result.innerHTML = `${formatCurrencyBRL(total).replace("R$", "")} Reais`

        footer.classList.add("show-footer") // Exibe o footer

    } catch (error) {
        footer.classList.remove("show-footer") // Esconde o footer
        console.log(error)
        alert("Não foi possível converter. Por favor, tente novamente.")
        
    }
}


// formata a moeda ( adiciona o 'R$ ')
function formatCurrencyBRL(value){
    // converte para número para usar o toLocateString para formatar no padrão BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}