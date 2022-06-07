const botaoEnviar = document.querySelector(".botao-enviar--msg");
const form = document.querySelector(".formulario-contato");
const inputNome = document.querySelector('#nome')
const inputMsg = document.querySelector('#msg')


inputNome.addEventListener ('blur', (e)=> {
    validaForm(e.target)
})


botaoEnviar.addEventListener('click', function (e) {    
    const nome = form.nome.value;
    const mensagem = form.msg.value;

    if (nome.length > 40) {
        alert('O nome deve conter no máximo 40 caracteres.')
        document.form.nome.focus()
    }

    if (mensagem.length > 120) {
        alert('a mensagem deve conter no máximo 120 caracteres.')
    }
});

function validaForm(input) {

    const tipoInput = input.dataset.tipo     

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMsgErro(tipoInput, input)
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

const msgErro = {
    nome: {
        valueMissing: 'O campo "Nome" não pode estar vazio!'
    }
}