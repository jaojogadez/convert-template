const footer = document.querySelector("footer")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    footer.classList.add("show-footer")
    
})