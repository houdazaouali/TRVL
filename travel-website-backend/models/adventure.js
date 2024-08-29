// backend/models/adventure.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  const Adventure = sequelize.define('Adventure', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Adventure;
};
