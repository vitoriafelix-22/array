var arquivos = [123, 21, 3, 78, 94]
var espacoTotal= 512
var espacoOcupado = 0
var percentual = 0
for(i=0; i < arquivos.length; i++){
    espacoOcupado = espacoOcupado + arquivos[i]
    percentual = (arquivos[i] * 100) / espacoTotal 
    console.log(`O percentual que o arquivo ${arquivos[i]} é: `, percentual)
}
var espacolivre = espacoTotal - espacoOcupado

console.log("O espaço total ocupado é: ", espacoOcupado)
console.log("O total livre em disco é: ", espacolivre)


