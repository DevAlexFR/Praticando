// Desafios
// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
function desafio1() {
    let titulo = document.querySelector("h1");
    titulo.innerHTML = "Hora do Desafio.";
}


// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function verificarChute() {
    console.log("Botão foi clicado");
    // alert("Eu amo JS");
    // let cidade = prompt("Nome de uma cidade do Brasil?");
    // alert(`Estive em ${cidade} e lembrei de você`);
    let valor1 = prompt("Digite um valor para somar:")
    let valor2 = prompt("Digite outro valor para somar:")
    alert(`A soma de ${valor1} com ${valor2} e iqual ${parseInt(valor1)+parseInt(valor2)}`)
}


desafio1();
