const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const baseVersion = "/v1";

const routes = [
  {
    method: "POST",
    path: `${baseVersion}/produtos`,
    options: {
      handler: produtoController.createProduto,
      validate: produtoSchema.createProduto,
    },
  },
  {
    method: "PUT",
    path: `${baseVersion}/produtos/{id}`,
    options: {
      handler: produtoController.updateProduto,
      validate: produtoSchema.updateProduto,
    },
  },
  {
    method: "DELETE",
    path: `${baseVersion}/produtos/{id}`,
    options: {
      handler: produtoController.deleteProduto,
      validate: produtoSchema.consultaPorId,
    },
  },
  {
    method: "GET",
    path: `${baseVersion}/produtos/{id}`,
    options: {
      handler: produtoController.getProdutoById,
      validate: produtoSchema.consultaPorId,
    },
  },
  {
    method: "GET",
    path: `${baseVersion}/produtos`,
    options: {
      handler: produtoController.listProdutos,
      validate: produtoSchema.listProdutos,
    },
  },
];

module.exports = routes;
