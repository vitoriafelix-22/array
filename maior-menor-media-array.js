var entrada = require("readline-sync")
var idades = []
var soma = 0
for (i = 0; i < 5; i++) {
    var idade = parseInt(entrada.question("Me informe a sua idade, por gentileza: "))
    idades.push(idade)
}
var referenciaMaior = idades[0]
var referenciaMenor = idades[0]
for (i = 0; i < idades.length; i++) {
    soma = soma + idades[i]
    if (referenciaMaior < idades[i]){
        referenciaMaior = idades[i]
    }
    if (referenciaMenor > idades[i]){
        referenciaMenor = idades[i]
    }
}
console.log("A media das idades e: ", soma / 5)
console.log("A maior idade e: ", referenciaMaior)
console.log("A menor idade e: ", referenciaMenor)
