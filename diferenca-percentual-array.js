var entrada = require("readline-sync")
var produtos = []
for (i = 0; i < 2; i++) {
    var produto = parseFloat(entrada.question("Me informe o valor do produto, por favor: "))
    produtos.push(produto)
}
var referenciaCaro = produtos[0]
var referenciaBarato = produtos[0]
for (i = 0; i < produtos.length; i++) {
    if (referenciaCaro < produtos[i]) {
        referenciaCaro = produtos[i]
    }
    if (referenciaBarato > produtos[i]) {
        referenciaBarato = produtos[i]
    }
}
var subtracao = referenciaCaro - referenciaBarato
var multiplicacao = subtracao * 100 / referenciaBarato

console.log("O produto mais barato é R$ ", referenciaBarato, "reais")
console.log("O produto mais caro é R$ ",referenciaCaro, "reais")
console.log("A diferença percentual foi de: ", multiplicacao,"%")
if (referenciaCaro * 0.1 - referenciaCaro > referenciaBarato){
    console.log("O produto mais caro, mesmo com o desconto de 10%, continua mais caro que o mais barato.")
}else {
    console.log("Com o desconto de 10%, o produto mais caro fica mais em conta se comparado com o mais barato.")
}
