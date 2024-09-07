const footer = document.querySelector("footer")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    footer.classList.toggle("show-footer")
})

// Pega o valor do Input enquanto o user digita e não deixar digitar caracteres, somente números
const input = document.getElementById("amount")
input.addEventListener("input", () => {
    const CaractersRegex = /\D+/g
    input.value = input.value.replace(CaractersRegex, "")
})