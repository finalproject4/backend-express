'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hall = sequelize.define('Hall', {
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    section: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    name: DataTypes.STRING
  }, { tableName: "halls"});
  Hall.associate = function(models) {
    Hall.belongsTo(models.User, {
      foreignKey: "user_id"
    })
  };
  return Hall;
};