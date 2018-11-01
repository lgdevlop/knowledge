# knowledge

Branch para desenvolvimento em ambiente Docker. Com a possibilidade de rodar tanto o projeto final como o projeto em desenvolvimento do zero em paralelo.

Frontend final rodando na porta 8081 e Frontend em desenvolvimento na porta 8080 para o host.
Backend final rodando na porta 4001 e Backend inicial rodando na porta 4000 para o host.

Banco do Backend final é o knowledge_final e o do Backend inicial é o knowledge.

## Como rodar

- Para executar os containers(na pasta raiz, onde está o docker-compose.yml; executar os comandos abaixo no terminal):
  - `docker-compose up`
- Após a execução do comando acima terminar, executar as etapas abaixo:

  - Entrar no terminal do container do postgres:
    - `docker exec -it knowledge_dbpostgres_1 /bin/sh`
  - Entrar no CLI do postgres:
    - `psql -U postgres`
  - Criar os bancos de dados knowledge e knowledge_final:
    - `CREATE DATABASE knowledge;`
    - `CREATE DATABASE knowledge_final;`
  - Sair do CLI do postgres:
    - `\q`
  - Sair do terminal do container do postgres:
    - `exit`
  - Entrar no terminal do container do backend final:
    - `docker exec -it knowledge_vfbackend_1 /bin/sh`
  - Executar as migrations para criar as tabelas no postgres:
    - `node_modules/.bin/knex migrate:latest`
  - Sair do terminal do container do backend final:
    - `exit`
  - Após criar as migrations do backend inicial(não esquecer de deixar o .env apontando para o banco knowledge), entrar no terminal do container do backend inicial:
    - `docker exec -it knowledge_vibackend_1 /bin/sh`
  - Executar as migrations para criar as tabelas no postgres:
    - `node_modules/.bin/knex migrate:latest`
  - Sair do terminal do container do backend inicial:
    - `exit`
  - Configurando o usuário como administrador:
    - Entrar no terminal do container do postgres:
      - `docker exec -it knowledge_dbpostgres_1 /bin/sh`
    - Entrar no CLI do postgres:
      - `psql -U postgres`
    - Entrar no banco de dados(neste caso o do projeto final):
      - `\c knowledge_final`
    - Rodar o update para todos os usuários ou se preferir usar a cláusula where, limitando o(s) usuário(s) desejado(s):
    - `update users set admin = true;`

  **Em ambientes windows, acredito que o ideal seja rodar o npm install no terminal do windows antes de rodar os containers docker. Quem sabe inclusive tirando o npm install do docker-compose.yml dos containers!**
