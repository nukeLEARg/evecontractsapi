'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define('Contract', {
    contract_id: {type:DataTypes.INTEGER,allowNull: false,primaryKey: true,},
    buyout: DataTypes.DOUBLE,
    collateral: DataTypes.DOUBLE,
    date_expired: {type:DataTypes.DATE,allowNull: false,},
    date_issued: {type:DataTypes.DATE,allowNull: false,},
    days_to_complete: DataTypes.INTEGER,
    end_location_id: DataTypes.BIGINT,
    for_corporation: DataTypes.BOOLEAN,
    issuer_corporation_id: {type:DataTypes.INTEGER,allowNull: false,},
    issuer_id: {type:DataTypes.INTEGER,allowNull: false,},
    price: DataTypes.DOUBLE,
    reward: DataTypes.DOUBLE,
    start_location_id: DataTypes.BIGINT,
    title: DataTypes.STRING,
    type: {type:DataTypes.STRING,allowNull: false,},
    volume: DataTypes.DOUBLE,
    region_id: {type:DataTypes.INTEGER,allowNull: false,}
  });
  Contract.associate = (models) => {
    Contract.hasMany(models.ContractItem,{
      foreignKey: 'contract_id'
    });
  };
  return Contract;
};