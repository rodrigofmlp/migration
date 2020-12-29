"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'cpf',{
        allowNull: true,
        type: Sequelize.STRING,
    });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('users', 'cpf');

  },
};
