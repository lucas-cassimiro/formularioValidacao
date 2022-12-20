const botaoEnviar = document.getElementById('botao')
const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')
const campoInputs = document.querySelectorAll('.input')
let camposInputs = document.querySelectorAll('.input')

botaoEnviar.addEventListener("click", function() {
    campoInputs.forEach(function(item, index){
        if(item.value == 0) {
            item.classList.add("borda-vermelha")
            item.classList.remove("borda-verde")
            camposObrigatorios[index].innerText = "*Campo obrigatório"
        }else if(item.value != 0) {
            item.classList.add("borda-verde")
            item.classList.remove("borda-vermelha")
            camposObrigatorios[index].innerText = ""
        }
    })
})

camposInputs.forEach(function(item, index) {
    item.addEventListener("change", function() {
        if(item.value != 0) {
            item.classList.add("borda-verde")
            camposObrigatorios[index].innerText = ""
        }else if(item.value == 0) {
            item.classList.remove("borda-verde")
            item.classList.add("borda-vermelha")
            camposObrigatorios[index].innerText = "*Campo obrigatório"
        }
    })
}) 




