// Desafios
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
function contador_10() {
    let i = 0;
    while(i<=10) {
        alert(
            i
        )
        i++
    };
}


// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
function contador_0() {
    let i = 10;
    while(i!=-1) {
        alert(
            i
        )
        i--
    };
}


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
function cont() {
    let i = prompt("Contar ate 0 de:");
    while(i!=-1) {
        alert(
            i
        )
        i--
    };
}


// contador_10();
// contador_0();
// cont();
