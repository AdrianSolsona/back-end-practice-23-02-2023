'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.belongsToMany(models.User,
        {through:{model:models.Appointmentt,unique:false}})
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    style: DataTypes.STRING,
    instagram: DataTypes.STRING,
    tarifa: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};