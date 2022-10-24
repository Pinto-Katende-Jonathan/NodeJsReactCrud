const {sequelize} = require('../config/db')
const {DataTypes} = require('sequelize');

taches = sequelize.define('Task', {
    // Model attributes are defined here
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt:{
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
    },
    is_complete:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  });

// sequelize.sync()
  
module.exports = taches