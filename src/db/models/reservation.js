'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    user_id: DataTypes.STRING,
    tool_id: DataTypes.STRING,
    date: DataTypes.DATE
  }, { tableName: "reservation"});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, {
      foreignKey: "user_id"
    })
  };
  return Reservation;
};