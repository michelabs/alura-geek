const botaoLogin = document.querySelector('.botao-login')

var usuarios = [
    {'email': 'alura@alura.com.br', 'senha': '123Alura'}
]

function email() {
    var usuario = document.getElementsByName('email')[0].value
    var senha = document.getElementsByName('senha')[0].value

    for (var u in usuarios) {
        var us = usuarios[u]
        if (us.email === usuario && us.senha === senha) {
            window.location = 'index.html'
            return true
        }
    }
    alert('Dados incorretos, tente novamente.')
    return false
}

botaoLogin.addEventListener('click', (e) => {
    e.preventDefault()
    email()

})