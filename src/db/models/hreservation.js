'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hreservation = sequelize.define('Hreservation', {
    user_id: DataTypes.STRING,
    hall_id: DataTypes.STRING,
    date: DataTypes.DATE
  }, { tableName:"hreservations"});
  Hreservation.associate = function(models) {
    Hreservation.belongsTo(models.User, {
      foreignKey: "user_id"
    })
  };
  return Hreservation;
};