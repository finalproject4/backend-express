'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tool = sequelize.define('Tool', {
    price: DataTypes.DOUBLE,
    type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, { tableName: "tools"});
  Tool.associate = function(models) {
    Tool.belongsTo(models.User, {
      foreignKey: "user_id"
    })
    Tool.hasMany(models.Reservation, {
      foreignKey: "tool_id",
      onDelete: "CASCADE",
      as: "reservations"

    })
  };
  return Tool;
};