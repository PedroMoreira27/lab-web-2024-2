const aluno = require('../api/v1/alunos/aluno-routes');
const produto = require('../api/v1/produtos/produto-routes');

const routes = [
    ...produto, ...aluno
]

module.exports = routes;