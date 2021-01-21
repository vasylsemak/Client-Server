const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 10
    }
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://www.candywarehouse.com/core/media/media.nl?id=117923&c=322133&h=5a393bd498f4dbe3a66b&resizeid=103&resizeh=320&resizew=320",
  }
});
