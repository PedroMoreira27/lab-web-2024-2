const produtoBusiness = require("./produto-business");

const createProduto = async (request, h) => {
  try {
    const produto = await produtoBusiness.save(request.payload);
    return h.response(produto).code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const updateProduto = async (request, h) => {
  try {
    const { id } = request.params;
    const produto = await produtoBusiness.update(id, request.payload);
    return h.response(produto).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const deleteProduto = async (request, h) => {
  try {
    const { id } = request.params;
    const isLogical = request.query.logical === "true";
    await produtoBusiness.remove(id, isLogical);
    return h.response({ message: "Produto removido com sucesso." }).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const getProdutoById = async (request, h) => {
  try {
    const produto = await produtoBusiness.getById(request.params.id);
    if (!produto) return h.response({ message: "Produto não encontrado." }).code(404);
    return h.response(produto).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const listProdutos = async (request, h) => {
  try {
    const produtos = await produtoBusiness.listByFilters(request.query);
    return h.response(produtos).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoById, listProdutos };
