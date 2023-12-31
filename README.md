# Challenge Marvel API 



## Tecnologias Utilizadas

- [NestJS](https://nestjs.com)
- [Prisma](https://www.prisma.io)
- Banco de dados em memória

<br>

## Instalação

```bash
# Instalar as dependencias
$ yarn

# Criar um arquivo .env na raiz do projeto e inserir:

DATABASE_URL="file:./marvel.db"
URL_MARVEL_API="https://gateway.marvel.com/v1/public/characters"
PUBLIC_KEY="inserir a public key que recebe no site da marvel como 'string'"
PRIVATE_KEY="inserir a private key que recebe no site da marvel 'string'"

# Criar uma migration com as configurações que foi definida no arquivo .env
$ npx prisma migrate dev --name init

# Caso já esteja criado, inserir os comandos
$ npx prisma generate

```
<br>
## Rodando a aplicação

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Documentação
<br>

### Endpoints

| Método | Rota | Descrição |
| -------|-------|--------- |
| GET    | /crud-marvel/update-list|Atualizar lista local local|
| GET    | /crud-marvel/ | Buscar todos os heróis no Db local|
| GET   | /findOne/:name | Buscar um herói |
| PATCH    | /crud-marvel/add-favorite/:id | Adicionando e removendo favorito|
| GET | /crud-marvel/all | Buscar todos os favoritos|

<br>

## Arquitetura utilizada
<p>Foram criados três modulos:
- A pasta prisma foi criada para fazer a conexão com o banco de dados local para cada serviço que iria utilizar nas rotas da pasta Marvel; 
- A pasta http foi criada com o intuito de fazer o serviço que integra com a API da Marvel, buscando e filtrado o nome dos heróis e fazendo uma lista no banco de dados local; 
- Já a pasta Marvel, foi criada com os arquivos module, controller para as rotas e os services, onde tem a rota de buscar dados da API Marvel e criar uma lista de hérois no banco de dados; A rota que busca todos os heróis; A rota que busca um herói; A rota de atualizar o status de favorito; e a última rota que busca a lista dos selecionados como favoritos. <p>

### Autor

| [![github/emersondp07](https://avatars.githubusercontent.com/u/91437391?v=4)](https://github.com/emersondp07 "Checkout github") |
|---|
| [Emerson Dantas](https://github.com/emersondp07) |

