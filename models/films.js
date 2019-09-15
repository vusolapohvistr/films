'use strict';
module.exports = (sequelize, DataTypes) => {
  const films = sequelize.define('films', {
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    format: DataTypes.STRING,
    actors: DataTypes.STRING
  }, {});
  films.associate = function(models) {
    // associations can be defined here
  };
  return films;
};