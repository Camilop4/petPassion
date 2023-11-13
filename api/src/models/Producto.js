const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('producto', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        primaryKey: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descripcion: {
        type: DataTypes.STRING(2000),
        allowNull: false 
    },

    diseño: {
        type: DataTypes.STRING,
        allowNull: false
    },

    color: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },

    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },

    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    numRewiews: {
        type: DataTypes.INTEGER,
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

  }, {
    timestamps: false
  });
};