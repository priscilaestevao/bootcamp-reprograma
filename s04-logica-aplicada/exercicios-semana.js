// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

const cartao = [5555666677778884, 5485755481460022, 5141331902596939, 5381579886310193, 5261400319746371]

function checkCartao(arr, index) {
  const arrCartao = []
  const digVerificador = []
  const numCartao = []
  
  for(let i = 0; i < arr.length; i++) {
    arrCartao.push(arr[i].toString().split(''))
    digVerificador.push(arrCartao[i].pop())
    numCartao.push(arrCartao[i].reverse)
  }
    // const numCartao = cartao.toString().split('')
  // const digVerificador = numCartao.pop()
  // const invCartao = numCartao.reverse()
  // --> com essas variáveis acima não consegui dar o console.log da função
  
  let multDigCartao = []
  for(let i = 0; i < numCartao[index].length; i++) {
    if(i % 2 != 0) {
      multDigCartao.push(numCartao[index][i] *= 2)
    }
  }
  let subDigCartao = []
  for(let i = 0; i < multDigCartao.length; i++) {
    if(multDigCartao[i] > 9) {
      subDigCartao.push(multDigCartao[i] -= 9)
    }
  }
  let somaDigCartao = 0
  const total = somaDigCartao += multDigCartao
  if (total % 10 === 0) {
    return `Número de cartão VÁLIDO`
  } else {
    return `Número de cartão INVÁLIDO. Tente outro.`
  }
}
console.log(checkCartao(cartao, 1))


///////////////////////

// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

const baseClientes = {
    Clotilde: {
      visitas: 1,
    },
    Florinda: {
      visitas: 2,
    },
    Paty: {
      visitas: 3,
    },
  }

const clientes = Object.keys(baseClientes)
// Object.keys método que retorna um array de propriedades enumeraveis de um determinado objeto

function saudarCliente(nome) {
  let desconhecida = clientes.indexOf(nome)
  if (desconhecida === -1) {
    console.log(`Olá, ${nome} é a primeira vez por aqui?`)
  }
  let umaVez = baseClientes[`${nome}`].visitas
  if(umaVez === 1) {
    console.log(`Bem-vinda, ${nome}! Que bom que voltou!`)
  } else {
    console.log(`Bem-vinda mais uma vez, ${nome}`)
  }
}
// saudarCliente('Clotilde')
// saudarCliente('Florinda')
// saudarCliente('Paty')
// saudarCliente('Sandra')