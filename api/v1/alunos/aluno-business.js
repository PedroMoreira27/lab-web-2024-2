const listaAlunos = [];
const alunoModel = require('./aluno-model');

const save = async (aluno) => {
    
    const saved = await alunoModel.Aluno.create(aluno);

    return aluno;
}


const list = async(filters) => {

     
    return await alunoModel.Aluno.findAll();
}

module.exports = {save, list};