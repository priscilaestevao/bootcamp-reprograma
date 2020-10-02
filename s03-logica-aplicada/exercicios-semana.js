const input = require ("readline-sync")
// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

function potenciaDeDois(num) {
    let resultado = 1
    for (let i = 1; i <= num; i++) {
        resultado *= 2
    } return resultado
}
// console.log(potenciaDeDois(10))



// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function recebeTresNumeros (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num1 < num2 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}
// console.log(recebeTresNumeros (10, 20, 30))



// ***************

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática,
// um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o
// operador módulo (`%`) para determinar se um número é divisível por outro.



// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 



// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de
// números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]