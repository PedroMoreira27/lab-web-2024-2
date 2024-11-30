const { Produto } = require("./produto-model");

const save = async (produto) => {
  return await Produto.create(produto);
};

const update = async (id, produtoAtualizado) => {
  const produto = await Produto.findByPk(id);
  if (!produto) throw new Error("Produto não encontrado.");
  return await produto.update(produtoAtualizado);
};

const remove = async (id, isLogical = true) => {
  const produto = await Produto.findByPk(id);
  if (!produto) throw new Error("Produto não encontrado.");
  if (isLogical) {
    return await produto.update({ status: "inativo" });
  } else {
    return await produto.destroy();
  }
};

const getById = async (id) => {
  return await Produto.findByPk(id);
};

const listByFilters = async (filters) => {
  const where = {};
  if (filters.categoria) where.categoria = filters.categoria;
  if (filters.nome) where.nome = { [Sequelize.Op.like]: `%${filters.nome}%` };
  return await Produto.findAll({ where });
};

module.exports = { save, update, remove, getById, listByFilters };
