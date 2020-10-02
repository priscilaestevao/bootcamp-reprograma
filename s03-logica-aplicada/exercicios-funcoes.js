const input = require ("readline-sync")
// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(num1, num2) {
    return num1 + num2
}
function subtracao(num1, num2){
    return num1 - num2
}
function multiplicacao(num1, num2){
    return num1 * num2
}
function divisao (num1, num2) {
    return num1 / num2
}
// console.log(soma(2, 3))
// console.log(subtracao(2, 3))
// console.log(multiplicacao(2, 3))
// console.log(divisao(2, 3))



// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero).
// Adicione esta lógica nas funções.

function multiplicacaoSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return `Não pode ser zero`
    } return num1 * num2
}
function divisaoSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return `Não pode ser zero`
    } return num1 / num2
}
// console.log (multiplicacaoSemZero (2, 3))
// console.log (divisaoSemZero (4, 3))



// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String.
// Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function chamaFuncao(num1, num2) {
    return divisaoSemZero(num1, num2)
}
// console.log(`O resultado da operação é ${chamaFuncao(9, 3)}`)



// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva
// a conta 36325 * (9824 + 777).

function expressaoNumerica(num1, num2, num3) {
    return multiplicacao(num1, soma(num2, num3))
}
// console.log(expressaoNumerica (36325, 9824, 777))



// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles.
// Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, some
// estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número
// aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()`
// e como utilizá-lo.

function somaAleatorio(num1, num2) {
    let valor1 = parseInt(Math.random(num1) * 101)
    let valor2 = parseInt(Math.random(num2) * 101)
    return valor1 + valor2
}
// console.log(`A soma de x e y é ${somaAleatorio(1, 100)}`)



// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha
// todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function bla (par1, par2, par3) {
    if (par1 === undefined || par2 === undefined|| par3 === undefined) {
        return "Preencha todos os valores corretamente!"
    } return ((par1 * par2 * par3) + 2)
}
// console.log(bla (2, 4, 6))



// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido
// pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function recebeTresParametros(par1, par2, par3) {
    if (par1 != undefined && par2 == undefined && par3 == unde) {
        return par1
    } else if (par1 != undefined && par2 != undefined && par3 == undefined) {
        return par1 + par2
    } else if (par1 != undefined && par2 != undefined && par3 != undefined) {
        return (par1 + par2) / par3
    } else {
        return "Não recebeu parâmetro"
    }
}
// console.log (recebeTresParametros(3, 5, 7).toFixed(2))



// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo,
// recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar
// JavaScript para inverter uma string.

function inverter(s) {
    return s.split("").reverse().join("")
}
// console.log(inverter("priscila"))



// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um
// palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function checkPalindromo(string) {
   let nome = string.length
   if (nome === 0 || nome === 1) {
       return true
   }
   if (string [0] === string [nome - 1]) {
       return checkPalindromo(string.slice(1, nome - 1))
   }
   return false
}
// console.log(checkPalindromo("arara"))
// console.log(checkPalindromo("amanha"))
// console.log(checkPalindromo("luz azul"))



// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade
// de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar
// "chocolate"

function checkMaisCaracteres(str1, str2) {
    if (str1.length > str2.length) {
        return str1
    } else if (str1.length < str2.length) {
        return str2
    }
}
// console.log(checkMaisCaracteres("banana", "chocolate"))

