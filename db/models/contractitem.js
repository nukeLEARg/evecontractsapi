'use strict';
export default (sequelize, DataTypes) => {
  const ContractItem = sequelize.define('ContractItem', {
    is_blueprint_copy: DataTypes.BOOLEAN,
    is_included: {type:DataTypes.BOOLEAN,allowNull: false,},
    item_id: DataTypes.BIGINT,
    material_efficiency: DataTypes.INTEGER,
    quantity: {type:DataTypes.INTEGER,allowNull: false,},
    record_id: {type:DataTypes.BIGINT,allowNull: false,},
    runs: DataTypes.INTEGER,
    time_efficiency: DataTypes.INTEGER,
    type_id: {type:DataTypes.INTEGER,allowNull: false,},
  });
  ContractItem.associate = (models) => {
    ContractItem.belongsTo(models.Contract, {
      foreignKey: 'contract_id',
      onDelete: 'CASCADE',
    });
  };
  return ContractItem;
};