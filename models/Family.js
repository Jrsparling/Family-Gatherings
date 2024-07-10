const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Family extends Model {}

Family.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 350]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 128]
            }
          },
        },
    {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'family',
    }
        );
        module.exports = Family;