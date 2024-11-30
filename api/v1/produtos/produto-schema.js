const Joi = require("joi");

const dimensoesSchema = Joi.object({
  altura: Joi.number().positive().required(),
  largura: Joi.number().positive().required(),
  profundidade: Joi.number().positive().required(),
  unidadeMedida: Joi.string().valid("cm", "m", "in").required(),
});

const pesoSchema = Joi.object({
  valor: Joi.number().positive().required(),
  unidadeMedida: Joi.string().valid("kg", "g", "lb").required(),
});

const createProduto = {
  payload: Joi.object({
    id: Joi.string().required(),
    nome: Joi.string().min(3).required(),
    descricao: Joi.string(),
    categoria: Joi.string().required(),
    marca: Joi.string(),
    preco: Joi.number().positive().required(),
    quantidadeEstoque: Joi.number().integer().positive().required(),
    codigoBarras: Joi.string().length(13).required(),
    dimensoes: dimensoesSchema.required(),
    peso: pesoSchema.required(),
    status: Joi.string().valid("ativo", "inativo").default("ativo"),
    dataCadastro: Joi.date(),
  }),
};

const updateProduto = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  payload: Joi.object({
    nome: Joi.string().min(3),
    descricao: Joi.string(),
    categoria: Joi.string(),
    marca: Joi.string(),
    preco: Joi.number().positive(),
    quantidadeEstoque: Joi.number().integer().positive(),
    codigoBarras: Joi.string().length(13),
    dimensoes: dimensoesSchema,
    peso: pesoSchema,
    status: Joi.string().valid("ativo", "inativo"),
  }),
};

const consultaPorId = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const listProdutos = {
  query: Joi.object({
    nome: Joi.string().min(3),
    categoria: Joi.string(),
  }),
};

module.exports = { createProduto, updateProduto, consultaPorId, listProdutos };
