var entrada = require("readline-sync")
var pesos = []
for (i = 0; i < 5; i++) {
    var peso = parseFloat(entrada.question("Qual seu peso? "))
    if(peso >= 43 && peso <=55){
        console.log("Seu peso foi armazenado.")
        pesos.push(peso)
    }else{
        console.log("Seu peso não foi armazenado.")
    }
    
}

