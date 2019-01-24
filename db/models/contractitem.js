'use strict';
module.exports = (sequelize, DataTypes) => {
  const ContractItem = sequelize.define('ContractItem', {
    is_blueprint_copy: DataTypes.BOOLEAN,
    is_included: DataTypes.BOOLEAN,
    item_id: DataTypes.BIGINT,
    material_efficiency: DataTypes.INTEGER,
    quantitiy: DataTypes.INTEGER,
    record_id: DataTypes.INTEGER,
    runs: DataTypes.INTEGER,
    time_efficiency: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {underscored: true});
  ContractItem.associate = function(models) {
    ContractItem.belongsTo(models.Contract, {
      foreignKey: 'contract_id',
      onDelete: 'CASCADE',
      });   
  };
  return ContractItem;
};