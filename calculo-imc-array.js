var alturas = [1.70, 1.55, 1.40, 1.90, 1.75]
var pesos = [55.7, 97.5, 67.8, 72, 88, 8]
for (i = 0; i < 5; i++) {
var calculoIMC =  pesos[i] / (alturas[i] * alturas[i])
console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é: `, calculoIMC)
}
