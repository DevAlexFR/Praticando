// Desafios
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
function final_de_semana() {
    let dia = prompt("Qual é o dia da semana?");

    if (dia == "Sábado" || dia =="Domingo"){
        alert("Bom fim de semana!");
    } else {
        alert("Boa semana!");
    }
}


// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
function positivo_negativo() {
    let n = prompt("Digite um número:")

    if(n < 0){
        alert("Negativo");
    } else {
        alert("Positivo");
    } 
}


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
function pontuação() {
    let pontos = 0

    while(pontos < 100) {
        alert("Tente novamente para ganhar.");
        pontos = prompt("Digite uma pontuação:")
    }
    alert("Parabéns, você venceu!");
}


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
function saldo() {
    alert(`Seu saldo e de ${prompt("Digite seu saldo:")}`);
}


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
function nome() {
    alert(`Boas-vindas: ${prompt("Me diga seu nome:")}`);
}

// final_de_semana() 
// positivo_negativo()
// pontuação()
// saldo()
// nome()
