// Desafios
// Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
function bem_vindo() {
    alert("Boas vindas ao nosso site!");
}


// Declare uma variável chamada nome e atribua a ela o valor "Lua".
function planeta() {
    let nome = "Lua";
    alert(nome);
}


// Crie uma variável chamada idade e atribua a ela o valor 25.
function ano() {
    let idade = "25";
    alert(idade);
}


// Defina uma variável numeroDeVendas e atribua a ela o valor 50.
function vendas() {
    let numeroDeVendas = 50;
    alert(numeroDeVendas);
}


// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
function saldo() {
    let saldoDisponivel = 1000;
    alert(saldoDisponivel);
}


// Exiba um alerta com o texto "Erro! Preencha todos os campos"
// Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
function error() {
    let msg = "Erro! Preencha todos os campos";
    alert(msg);
}


// Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
function nome() {
    alert(prompt("Qual seu nome:"));
}


// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
function idade() {
    let idade = alert(prompt("Qual sua idade:"))
}


// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
function regra() {
    let idade = prompt("Qual sua idade:")

    if(idade>=18) {
        alert("Pode tirar a habilitação!")
    }
}


// bem_vindo();
// planeta();
// ano();
// vendas();
// saldo();
// error();
// idade();
// regra();
