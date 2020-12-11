<h1 align="center">
  <img src="../public/images/authentication.png" alt="mulher olhando vitrine de uma loja" width="300">
<p align="center">Autenticação/Autorização<p>

## Desafio da semana

Autenticar as rotas da CRUD de tarefas a partir das seguintes orientações:

1. Instalar "jsonwebtoken" via npm install
`$ npm install jsonwebtoken`

2. Gerar chave pelo https://travistidwell.com/jsencrypt/demo/ e guardar a chave pública

3. Instalar dotenv-safe
`$ npm install dotenv-safe`

4. Criar arquivo .env.example e .env, ambos com chave chamada SECRET
`$ SECRET=chave_rsa_aqui_sem_aspas`

5. Carregar as variáveis de ambiente no projeto, no arquivo tarefasRoute.js
`$ require('dotenv-safe').config();`

7. Criar variável contendo a SECRET
`$ const secret = process.env.SECRET`

8. Criar método de autenticação em `getAll`

9. Pegar o header de autorização e enviar uma mensagem de erro 401 quando vir vazio
`$ const authHeader = request.get('authorization');`

10. Passar bearer token no header de autenticação via Postman
`$ Bearer TOKEN_JWT_AQUI`

11. Verificar token JWT e enviar uma mensagem de erro 403 caso seja inválido
`$ jwt.verify(token, SECRET, (error) => {...});`

## Repositório da aula da semana:

[reprograma/on7-porto-s15-auth](https://github.com/reprograma/on7-porto-s15-auth)