'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    user_id: DataTypes.STRING,
    tool_id: DataTypes.STRING,
    date: DataTypes.DATE
  }, { tableName: "reservations"});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, {
      foreignKey: "user_id"
    })
    Reservation.belongsTo(models.Tool, {
      foreignKey: "tool_id"
    })
  };
  return Reservation;
};