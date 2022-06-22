var tabuleiro = document.querySelector('.jogo-da-forca')
var botoesInicio = document.querySelector('#btnInicio')
const divErradas = document.querySelector(".letras-erradas")
titulo = document.querySelector("h1")

botoesInicio.addEventListener('click', iniciarJogo)

function iniciarJogo() {


    const palavraSecreta = palavraAleatoria()
    palavraAleatoria(palavraSecreta)
    tabuleiro.style.display = "block"
    botoesInicio.style.display = "none"
    atualizandoJogo()
    document.addEventListener("keydown", reconhecendoDigito)
}

function reconhecendoDigito() {
    const codigoTeclado = event.keyCode 

    if (isLetra(codigoTeclado)) {
        const letra = event.key.toUpperCase()
        console.log(letra)
        console.log(codigoTeclado)
        titulo.style.display = "none"
        if (letrasErradas.includes(letra)) {
            letraRepetida()
        } else {
            if (palavraSecreta.includes(letra)) {
                letrasCorretas.push(letra)
            } else {
                letrasErradas.push(letra)
            }
        }
    }
    atualizandoJogo()
}

function atualizandoJogo() {
    mostrarLetrasErradas()
    mostrarLetrasCertas()
    checarjogo()
}

function mostrarLetrasErradas() {

    divErradas.innerHTML = ""
    letrasErradas.forEach(letra => {
        divErradas.innerHTML += `<span> ${letra} </span>`;

    })
}

function mostrarLetrasCertas() {
    const palavraCorreta = document.querySelector(".palavra-secreta")
    palavraCorreta.innerHTML = ""
    palavraSecreta.split("").forEach(letra => {
        if (letrasCorretas.includes(letra)) {
            palavraCorreta.innerHTML += `<span>${letra}<span>`
        } else {
            palavraCorreta.innerHTML += `<span>_<span>`
        }
    })
}

function letraRepetida() {
    console.log("Você já utilizou essa letra!")
}

function isLetra(codigoTeclado) {
    return codigoTeclado >= 65 && codigoTeclado <= 90
}

const fimDoJogo = () => {
    document.removeEventListener("keydown", reconhecendoDigito);
};

function novoJogo() {

    iniciarJogo()
    letrasErradas.splice(0, letrasErradas.length)
    letrasCorretas.splice(0, letrasCorretas.length)
    atualizandoJogo()
}

function desistir() {

    tabuleiro.style.display = "none"
    botoesInicio.style.display = "block"
    fimDoJogo()
    letrasErradas.splice(0, letrasErradas.length)
    letrasCorretas.splice(0, letrasCorretas.length)

}

function checarjogo() {
    let mensagemPerdeu = document.querySelector(".perdedor")
    let mensagemGanhou = document.querySelector(".vencedor")
    mensagemPerdeu.style.display = "none";
    mensagemGanhou.style.display = "none";
    const palavraCorreta = document.querySelector(".palavra-secreta")
    if (letrasErradas.length == 7) {
        mensagemPerdeu.style.display = "block";
        alert(`Você perdeu! A palavra era ${palavraSecreta}`)
        fimDoJogo();
    }
    if (palavraSecreta == palavraCorreta.innerText) {
        alert("Você ganhou!")
        fimDoJogo();

    }

    desenhaForca()
}