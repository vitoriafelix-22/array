var entrada = require("readline-sync")
var numeros = [ ]
for( i=0; i<=9; i++){
    var numero = parseInt(entrada.question("Me informe um numero: "))
    numeros.push(numero)
}
console.log(numeros)