/* eslint-disable valid-jsdoc */
'use strict';
const {
  Model,
} = require('../models/moviesModel');
module.exports = (Movie, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static showallmovie(models) {
      // define association here
      this.belongsTo(models.Movie, {
        foreignKey: 'Id',
      });
    };
    static addformmovie(models) {
        // define association here
        this.belongsTo(models.Movie, {
          foreignKey: 'Id',
        });
      }
    static editformmovie(models) {
        // define association here
        this.belongsTo(models.Movie, {
          foreignKey: 'Id',
        });
      }  
  }
  Movie.init({
    Id: DataTypes.INTEGER,
    title: DataTypes.VARCHAR,
    genres: DataTypes.VARCHAR,
    year: DataTypes.NUMBER,
    photo: DataTypes.CHAR,
  }, {
    modelName: 'movieModel',
    paranoid: true,
  });
  return Movie;
};


