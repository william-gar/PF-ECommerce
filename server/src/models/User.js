const { DataTypes } = require('sequelize');
const Sequelize = require('Sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type:DataTypes.ENUM('ADMIN', 'USER'),
      allowNull: false
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false
    },
    // favorites:{ 
    //   type:DataTypes.ARRAY(DataTypes.STRING)
    
    // }
     
  
   },

   {
    timestamps: false,
  });
};
