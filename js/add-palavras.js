form = document.querySelector('#form')
sectionAdicionarPalavra = document.querySelector("#addPalavra")
novaPalavra = document.querySelector("#nova-palavra")
botaoAddPalavra = document.querySelector("#btnAdicionarPalavra")

botaoAddPalavra.addEventListener('click', addPalavra)

function addPalavra() {
    sectionAdicionarPalavra.style.display = "block"
    botoesInicio.style.display = "none"
}


var botaoEnviarSalvar = document.querySelector("#enviar-palavra")
botaoEnviarSalvar.addEventListener('click', function(event) {
    event.preventDefault();
    verificandoNovaPalavra()
})

function verificandoNovaPalavra() {

    palavra = novaPalavra.value
    if (palavra.length <= 0) {

        alert("Por favor escreva uma palavra!")
    } else {

        if (palavra.length > 8) {
            alert("A palavra digitada passou do limite máximo de 8 caracteres")
        } else {
            palavras.push(palavra)
            alert("palavra Adicionada!")
        }
    }

}


btnCancelar = document.querySelector("#cancelar")
btnCancelar.addEventListener('click', function cancelar(event) {
    event.preventDefault()
    sectionAdicionarPalavra.style.display = "none"
    botoesInicio.style.display = "block"
    novaPalavra.value = ""
})