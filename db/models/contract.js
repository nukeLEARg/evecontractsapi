'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define('Contract', {
    buyout: DataTypes.DOUBLE,
    collateral: DataTypes.DOUBLE,
    contract_id: {type:DataTypes.INTEGER,allowNull: false,},
    date_expired: DataTypes.DATE,
    date_issued: DataTypes.DATE,
    days_to_complete: DataTypes.INTEGER,
    end_location_id: DataTypes.BIGINT,
    for_corporation: DataTypes.BOOLEAN,
    issuer_corporation_id: DataTypes.INTEGER,
    issuer_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    reward: DataTypes.DOUBLE,
    start_location_id: DataTypes.BIGINT,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    volume: DataTypes.DOUBLE
  },{underscored: true});
  Contract.associate = function(models) {
    // associations can be defined here
  };
  return Contract;
};