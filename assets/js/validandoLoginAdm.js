const botaoLogin = document.querySelector('.botao-login')

var usuarios = [  
    {'email': 'admalura@alura.com.br', 'senha': 'Adm123Alura'}
]

function email() {
    var usuario = document.getElementsByName('email')[0].value
    var senha = document.getElementsByName('senha')[0].value

    for (var u in usuarios) {
        var us = usuarios[u]
        if (us.email === usuario && us.senha === senha) {
            window.location = 'editandolistaprodutos.html'
            return true
        }
    }
    alert('Dados incorretos, tente novamente. Lembre-se, o email de um administrador se inicia com adm')
    return false
}

botaoLogin.addEventListener('click', (e) => {
    e.preventDefault()
    email()

})