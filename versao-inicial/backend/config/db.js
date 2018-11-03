const config = require("../knexfile");
const knex = require("knex")(config);

// Executa as migrations assim que a API é carregada - Não recomendado
knex.migrate.latest([config])
module.exports = knex;
