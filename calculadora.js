// ESCOPO DE VARIAVEIS - 
//CLASSE = OBJETO Desenvolver uma Classe para ter um Objeto
//FUNÇÃO
//GLOBAL quando uma variavél esta dentro de uma classe
 

function soma(a, b) {
    var z = 10;
    console.log (z);
    console.log (a + b);
    console.log ("O resultado da soma é " + a + " _ " + b); // STRING
    return a + b;
}

function subtracao(a, b) {
    console.log (a - b);
    return a - b;
}

function multiplicacao(a, b) {
    console.log (a * b);
    return a * b;
}

function divisao(a, b) {
    console.log (a / b);
    return a / b;
}

var x = 7;   // variavel global
var y = 2;   // variavel global

//IMPRIMIR NO TERMINAL
soma(x, y);

divisao(x, y);


