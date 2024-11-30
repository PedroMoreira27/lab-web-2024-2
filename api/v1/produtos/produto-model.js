const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Produto = database.sequelize.define(
  "Produto",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
    },
    categoria: {
      type: Sequelize.STRING,
    },
    marca: {
      type: Sequelize.STRING,
    },
    preco: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    quantidadeEstoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    codigoBarras: {
      type: Sequelize.STRING,
      unique: true,
    },
    dimensoes: {
      type: Sequelize.JSON,
    },
    peso: {
      type: Sequelize.JSON,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "ativo",
    },
    dataCadastro: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "produtos",
    timestamps: false,
  }
);

module.exports = { Produto };
