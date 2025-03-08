// Desafios
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function desafio1() {
    let altura = parseFloat(prompt('Qual sua altura em metros? (Exemplo: 1.75)'));
    let peso = parseFloat(prompt('Qual seu peso em quilogramas? (Exemplo: 70)'));

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    let imc = peso / (altura * altura);
    let element = document.querySelector('h1');
    element.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
}
// desafio1();


// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function faltorial() {
    let numero = parseInt(prompt('Digite um número inteiro para calcular o fatorial:'));

    if (isNaN(numero) || numero < 0) {
        alert('Por favor, insira um número inteiro válido e não negativo.');
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    let element = document.querySelector('h1');
    element.innerHTML = `O fatorial de ${numero} é: ${fatorial}`;
}
// faltorial();


// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolarReal(valorEmDolar) {
    const cotacaoDolar = 4.80; // Cotação fixa do dólar
    if (valorEmDolar < 0) {
        return "Por favor, insira um valor válido (não negativo).";
    }
    const valorEmReais = valorEmDolar * cotacaoDolar;
    return `O valor de $${valorEmDolar.toFixed(2)} é equivalente a R$${valorEmReais.toFixed(2)}.`;
}
// dolarReal();


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function area(altura, largura) {
    if (altura <= 0 || largura <= 0) {
        console.log("Por favor, insira valores positivos para altura e largura.");
        return;
    }

    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`A área da sala é: ${area} metros quadrados.`);
    console.log(`O perímetro da sala é: ${perimetro} metros.`);
}
// area(5, 8);


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function perimetro(raio) {
    if (raio <= 0) {
        console.log("Por favor, insira um valor positivo para o raio.");
        return;
    }

    const pi = 3.14;
    const area = pi * (raio * raio);
    const perimetro = 2 * pi * raio; 

    console.log(`A área da sala é: ${area.toFixed(2)} metros quadrados.`);
    console.log(`O perímetro da sala é: ${perimetro.toFixed(2)} metros.`);
}
// perimetro(5);


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
        return;
    }

    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
// mostrarTabuada(7); 
