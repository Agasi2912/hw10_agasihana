/* eslint-disable valid-jsdoc */
'use strict';
const {
  Model,
} = require('../models/usersModel');
module.exports = (User, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static showall(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'Id',
      });
    };
    static addform(models) {
        // define association here
        this.belongsTo(models.User, {
          foreignKey: 'Id',
        });
      }
    static editform(models) {
        // define association here
        this.belongsTo(models.User, {
          foreignKey: 'Id',
        });
      }  
  }
  User.init({
    Id: DataTypes.INTEGER,
    email: DataTypes.VARCHAR,
    gender: DataTypes.VARCHAR,
    password: DataTypes.NUMBER,
   role: DataTypes.VARCHARCHAR,
  }, {
    modelName: 'usersModel',
    paranoid: true,
  });
  return User;
};