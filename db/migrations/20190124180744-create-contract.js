'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contracts', {
      buyout: {
        type: Sequelize.DOUBLE
      },
      collateral: {
        type: Sequelize.DOUBLE
      },
      contract_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_expired: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_issued: {
        allowNull: false,
        type: Sequelize.DATE
      },
      days_to_complete: {
        type: Sequelize.INTEGER
      },
      end_location_id: {
        type: Sequelize.BIGINT
      },
      for_corporation: {
        type: Sequelize.BOOLEAN
      },
      issuer_corporation_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      issuer_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      reward: {
        type: Sequelize.DOUBLE
      },
      start_location_id: {
        type: Sequelize.BIGINT
      },
      title: {
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contracts');
  }
};