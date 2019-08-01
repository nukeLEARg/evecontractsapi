'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContractItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      is_blueprint_copy: {
        type: Sequelize.BOOLEAN,
      },
      is_included: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      item_id: {
        type: Sequelize.BIGINT,
      },
      material_efficiency: {
        type: Sequelize.INTEGER,
      },
      quantitiy: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      record_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      runs: {
        type: Sequelize.INTEGER,
      },
      time_efficiency: {
        type: Sequelize.INTEGER,
      },
      type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      contract_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Contracts',
          key: 'contract_id',
          as: 'contract_id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ContractItems');
  },
};