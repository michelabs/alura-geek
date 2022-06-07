export function valida(input) {
    const tipoInput = input.dataset.tipo    

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''     
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMsgErro(tipoInput, input)
    }  
}

const msgErro = {
    email: {
        valueMissing: 'O campo de e-mail não pode estar vazio!',
        typeMismatch: 'O e-mail digitado é inválido!'
    },

    senha: {
        valueMissing: 'O campo de senha não pode ser vazio!',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    }
}

const tipoErro = [
    'valueMissing', 'typeMismatch', 'patternMismatch', 'customError'
]

function mostraMsgErro(tipoInput, input) {
    let mensagem = ''
    tipoErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = msgErro[tipoInput][erro]
        }
    })
    return mensagem
}