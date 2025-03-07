// Logica de programacao: mergulhe em programacao com javascript
// alert("Ola mundo");

alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto= parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let p_tentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'; // Operador Ternário
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}, com ${tentativas} ${p_tentativa}.`);
