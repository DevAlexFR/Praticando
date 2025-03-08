// Desafios
// Criar uma função que exibe "Olá, mundo!" no console.
function ola_mundo() {
    console.log("Olá, mundo!");
}


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nome(name) {
    console.log(`Olá, ${name}!`);
}


// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function number(number) {
    console.log(parseInt(number) * 2);
}


// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1, n2, n3) {
    console.log((parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3);
}


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(n1, n2) {
    if (parseInt(n1) > parseInt(n2)) {
        console.log(n1);
    } else {
        console.log(n2);
    }
}


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function eleMesmo(number) {
    console.log(parseInt(number) * parseInt(number));
}


// ola_mundo();
// nome('Alex');
// number(2);
// media(7, 7,7);
// maior(1, 2);
// eleMesmo(3);
