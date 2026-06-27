# API mínima

Este projeto apresenta um exemplo simples de utilização do Fastify usando Node.js e Typescript. O contexto principal está relacionado a pilotos de Formula 1 e seus times.

## Requisitos

- Node.js versão 22.18.0 ou superior (devido o uso do `tsdown`)
- NPM

## Estrutura de diretórios

```text
src/
├── server.ts   arquivo de entrada do projeto
├── database/   contém os dados mockados dos pilotos e times
├── routes/     contém as rotas para acesso da API
├── services/   contém serviços que simulam o acesso aos dados
├── types/      contém os tipos usados pelo typescript
```

## Recursos disponíveis

`/drivers` - retorna a lista de pilotos.

`/drivers/{id}` - retorna o piloto conforme o `{id}` informado.

`/teams` - retorna a lista de times.

`/teams/{id}` - retorna o time conforme o `{id}` informado.

Exemplo de uma chamada completa com resposta:

```sh
$ curl -s http://localhost:3000/drivers/1 | jq
{
  "id": 1,
  "driver_name": "Lando Norris",
  "team_name": "McLaren Formula 1 Team"
}
```

## Scripts

`dist` - realiza a transpilação do typescript para javascript usando o sistema de módulos `CommonJS`.

`start:dev` - executa o projeto direto do typescript.

`start:watch` - executa o projeto direto do typescript, reiniciando em caso de alteração de arquivos.

`start:dist` - faz a transpilação do typescript para javascript e executa o projeto do javascript.

## Como executar

```sh
npm install
npm run start:dev
```