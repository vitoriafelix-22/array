var dados = [5, 30, 44, 27, 32, 50, 21, 20, 36, 74, 80, 88, 45, 31,
    20, 12, 66, 73, 64, 9, 90, 5]
var contador = 0
for (i = 0; i < dados.length; i++) {
    if (dados[i] % 5 == 0) {
        contador = 1 + contador
    
    }
    
}
console.log(contador)