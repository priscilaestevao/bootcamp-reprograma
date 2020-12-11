<h1 align="center">
  <img src="../public/images/shopping.png" alt="mulher olhando vitrine de uma loja" width="300">
<p align="center">Projeto de integração com o MongoDB<p>

## Passo a passo para execução do desafio da semana

**1 -** Instalar a dependência do mongoose no projeto:

```
npm install mongoose --save
```

**2 -**  Criar a string de conexão com o mongo, lembre-se que o nome do banco será : clientes. Lembre-se de criar a conexão e validar se realmente o banco está logado exibindo uma mensagem de suceso no console.

**3 -**  Após se certificar de que existe conexão com o mongo, será necessário estruturar o seu objeto que será armazenado no banco, o clientes (clientesSchema). 

O seu schema de cliente deverá conter as seguintes propriedades:
```
nome (String)
email: (String)
cpf: (String)
dataNascimento: (String)
estadoCivil: (String)
telefone: (Number)
comprou: (Boolean)
```

**4 -**  Recomendamos criar uma coleção do postman para armazenar as suas requisições.

**5 -**  O Seu projeto deverá conter as seguintes rotas/endpoints com os respectivos retornos:

```
POST/clientes
Incluir um novo cliente conforme as características informadas no contrato do model. (HTTP 201 OK)
Resposta:
{
    "status": true,
    "mensagem": "Cliente incluido com sucesso"
}


GET/clientes
Retornar a lista com todos os clientes (HTTP 200 OK)
Resposta exemplo:
[
    {
        "_id": "5dcd81f42e2aab923cbd653d",
        "email": "marilia.oliveira@outlook.com",
        "nome": "Marilia Messias",
        "cpf": 1234567890,
        "dataNascimento": "1992-04-03T03:00:00.000Z",
        "estadoCivil": "Solteira",
        "telefone": 123456789,
        "comprou": true
    }
]

GET/clientes/compradores
Retorna a lista com os clientes que já realizaram alguma compra (HTTP 200 OK)
Resposta exemplo:
[
    {
        "nome": "Marilia Messias",
        "email": "marilia.oliveira@outlook.com"
    },
    {
        "nome": "Joaquina Messias",
        "email": "marilia.oliveira@outlook.com"
    }
]

GET/clientes/{cpf}
Retornar a lista de clientes de acordo com o elemento informado como parâmetro (HTTP 200 OK)
Resposta exemplo:
[
    {
        "_id": "5dcd82ad5777b7b184ae38e3",
        "email": "marilia.oliveira@outlook.com",
        "nome": "Joaquina Messias",
        "cpf": 123456789,
        "dataNascimento": "1992-04-03T03:00:00.000Z",
        "estadoCivil": "Solteira",
        "telefone": 123456789,
        "comprou": true
    }
]
```

## Repositório da aula da semana:

[reprograma/on7-porto-s13-integracao-bd](https://github.com/reprograma/on7-porto-s13-integracao-bd)