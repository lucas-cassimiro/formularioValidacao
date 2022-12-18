var botaoEnviar = document.getElementById('botao')
var input = document.getElementById('nome')
var inputEmail = document.getElementById('email')

input.addEventListener("change", function() {

    if(input.value != 0 && inputEmail != 0) {
        input.classList.add('borda-verde')
        inputEmail.classList.add('borda-verde')
    }else {
        input.classList.remove('borda-verde')
        input.classList.remove('borda-vermelha')
        inputEmail.classList.remove('borda-verde')
        inputEmail.classList.remove('borda-vermelha')
    }
})

botaoEnviar.addEventListener("click", function() {
    let nomeUsuario = document.getElementById('nome')
    let emailUsuario = document.getElementById('email')
    let div = document.getElementById('campo-obrigatorio')
    let div2 = document.getElementById('campo-obrigatorio2')

    if (nomeUsuario.value == 0 && emailUsuario.value == 0) {
        nomeUsuario.classList.remove('borda-verde')
        nomeUsuario.classList.add('borda-vermelha')
        div.innerText = "campo obrigatório"
        div.style.color = "#F52E2E"
        emailUsuario.classList.add('borda-vermelha')
        emailUsuario.classList.remove('borda-verde')
        div2.innerText = "campo obrigatório"
        div2.style.color = "#F52E2E"

    }else if (nomeUsuario.value != 0 && emailUsuario.value != 0){
        nomeUsuario.classList.add('borda-verde')
        div.innerText = ""
        emailUsuario.classList.add('borda-verde')
        div2.innerText = ""
    }
})





    

