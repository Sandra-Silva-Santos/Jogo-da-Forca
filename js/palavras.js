var palavras = [
    "ABACAXI",
    "ABACATE",
    "GALINHADA",
    "BISCOITO",
    "CHOCOLATE",
    "AFETO",
    "SAUDADES",
    "HTML",
    "ALURA",
    "CSS",
    "VERMELHO",
    "GATO",
    "DESAFIO",
    "LIVE",
    "JAVASCRIPT",
    "CODIGO",
    "CODIGOFONTA",
    "CODIGOHTML",
    "CODIGOCSS",
    "CARAMELO",
    "VERMELHO",
    "MARROM",
    "MAGENTA",
    "FACEBOOK",
    "INSTAGRAN",
    "ALEGRIA",
    "SORRISO",
    "TRISTEZA",
    "RAIVA",
    "SONO",
    "FELICIDADE",
    "HOSTILIDADE",
    "MEDO",
    "EMPATIA",
    "AFETO",
    "CACHORRO",
    "GATO",
    "VENCEDOR",
    "SORTE",
    "SALADA",
    "GARRAFA",
    "AFRICA",
    "BRASIL"

];

function palavraAleatoria() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase()
}


const letrasErradas = []
const letrasCorretas = [];