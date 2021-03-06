module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('addresses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    logradouro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    complemento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    localidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    uf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ibge: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ddd: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    siafi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('addresses'),
};
