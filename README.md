# Events problem

Este projeto tem como finalidade resolver problemas relacionados ao registro e consumo de eventos de navegação dos usuários em um site.


## API

### API de Eventos

O objetivo desta API é registrar as informações de eventos de comportamento dos clientes.

#### Uso da API de Eventos

```sh
POST /events HTTP/1.1
Content-Type: application/json
```

```json
{
  "evemt": "buy",
  "timestamp": "2016-09-22T13:57:31.2311892-04:00"
}
```

#### Retorno da API de Eventos

- 201   Created

```json
{
  "evemt": "buy",
  "timestamp": "2016-09-22T13:57:31.2311892-04:00",
  "_id": "5c8581f76486797cecdd030e"
}
```

- 400   Bad Request

## Configurações

- **PORT**: Porta na qual o servidor web ficará disponível (default: 8339);
- **LOG_HEALTH_STATUS**: Informa se deve ou não registrar logs de requisições ao health-status (default: false);
- **LOG_ALL_REQUESTS**: Informa se deve logar todas as requisições ou somente erros (default: false - "somente errors");
- **LOG_LEVEL**: Informa o level de registro de logs [ emerg, alert, crit, error, warning, notice, info, debug ] (default: info);
- **DATABASE_NAME**: Nome do banco de dados;
- **DATABASE_URI**: URI para conexão com o mongodb;

## Stack

Para a criação deste projeto utilizamos as seguintes tecnologias e frameworks:

- [Node.js] - Plataforma de desenvolvimento
- [Express] - Web framework minimalista desenvolvido em node.js
- [Mongodb] - Banco de dados No SQL
- [Docker CE] - Plataforma de deploy

## Instalação e execução da aplicação

### Testes

Para executar a stack de testes basta executar o seguinte comando:

```sh
npm i
npm test
```

Para executar somente os testes automatizados deve ser executado:

```sh
npm i
npx mocha
```

### Executando local

Para executar o projeto localmente basta ajustar as configurações no arquivo /config.config.js e executar o seguinte comando:

```sh
npm i
npm start
```

### Executando local com Docker

```sh
docker-compose up -d
```

### Executando testes de stress local

```sh
npm i
npm start &
npm run stress
```

### Executando testes de stress local com Docker

```sh
docker-compose up -d
npm run stress
```


  [Node.js]: <https://nodejs.org>
  [express]: <http://expressjs.com>
  [Mongodb]: <https://www.mongodb.com/>
  [Docker CE]: <https://www.docker.com/>