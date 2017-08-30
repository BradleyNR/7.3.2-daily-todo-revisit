'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {  });
  return Todo;
};
