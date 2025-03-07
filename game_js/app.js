// Logica de programacao: mergulhe em programacao com javascript
// alert("Ola mundo");

alert("Boas vindas ao jogo do numero secreto");

let numeroSecreto=1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero entre 1 e 10");

    if (chute == numeroSecreto){
        alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}, com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
