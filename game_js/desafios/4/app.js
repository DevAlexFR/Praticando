// Desafios finais
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
function bem_vindo() {
    let nome = prompt("Digite seu nome:");
    let linguagem = prompt("Qual a linguagem de programação que você mais gosta?")
    console.log(`boas-vindas ${nome}`);
    console.log(`linguagem favorita: ${linguagem}`);

    alert(`Olá, ${nome}!`);
}


// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
function calculadora() {
    let operadores = ['+', '-', '*', '/'];
    let operador = prompt("Escolha o operador: +  -  *  /");

    while (!operadores.includes(operador)) {
        operador = prompt("Escolha APENAS os operadores entre: +  -  *  /");
    }

    let valor1 = Number(prompt("Digite o primeiro valor:"));
    let valor2 = Number(prompt("Digite o segundo valor:"));

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Erro: Você deve inserir números válidos!");
        return;
    }

    let resultado;

    if (operador == '+') {
        resultado = valor1 + valor2;
    } else if (operador == '-') {
        resultado = valor1 - valor2;
    } else if (operador == '*') {
        resultado = valor1 * valor2;
    } else {
        if (valor2 == 0) {
            alert("Erro: Divisão por zero não é permitida!");
            return;
        }
        resultado = valor1 / valor2;
    }

    alert(`O resultado de ${valor1} ${operador} ${valor2} = ${resultado}`);
}


// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
function idade(){
    let idade = prompt("Qual sua idade:");
    
    if(idade>=18) {
        alert("Maior de idade!");
    } else{
        alert("Menor de idaide!");
    }
}


// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
function positivo_negativo() {
    let numero = prompt("Digite um número:")

    if(numero < 0){
        alert("Negativo");
    } else {
        alert("Positivo");
    } 
}

// Use um loop while para imprimir os números de 1 a 10 no console.
function contador() {
    let contador = 1;
    while(contador<=10) {
        alert(contador);
        contador++;
    };
}


// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
function nota(){
    let idade = prompt("Qual sua nota:");
    
    if(idade>=7) {
        console.log("Aprovado!");
    } else{
        console.log("Reprovado!");
    }
}


// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
function random() {
    console.log(Math.random());
    console.log(parseInt(Math.random() * 10));
    console.log(parseInt(Math.random() * 1000));
}



// bem_vindo();
// calculadora();
// idade();
// positivo_negativo();
// contador();
// nota();
random();
