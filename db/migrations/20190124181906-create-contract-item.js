'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContractItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_blueprint_copy: {
        type: Sequelize.BOOLEAN
      },
      is_included: {
        type: Sequelize.BOOLEAN
      },
      item_id: {
        type: Sequelize.BIGINT
      },
      material_efficiency: {
        type: Sequelize.INTEGER
      },
      quantitiy: {
        type: Sequelize.INTEGER
      },
      record_id: {
        type: Sequelize.INTEGER
      },
      runs: {
        type: Sequelize.INTEGER
      },
      time_efficiency: {
        type: Sequelize.INTEGER
      },
      type_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      contract_id:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'contract',
          key: 'contract_id',
          as: 'contract_id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ContractItems');
  }
};