// Lógica de programação: explore funções e listas
let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gererNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let element = document.querySelector(tag);
    element.innerHTML = texto;
    // rsponsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número segicreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let p_tentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto, com ${tentativas} ${p_tentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

}


function gererNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gererNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gererNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
