import { valida } from "./validacao.js";

const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')

inputEmail.addEventListener('blur', (e) => {
    valida(e.target)
})

inputSenha.addEventListener('blur', (e) => {
    valida(e.target)
})
