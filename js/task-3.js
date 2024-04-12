
const inputEl = document.querySelector("#name-input")
inputEl.addEventListener('input', showHelloText)

const outputEl = document.querySelector("#name-output")

function showHelloText(input) {
    const text = input.target.value.trim()
    if (text.length === 0) outputEl.textContent = "Anonymous"
    else outputEl.textContent = text
}
