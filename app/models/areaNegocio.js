module.exports = (sequelize, DataTypes) => {
    const AreaNegocio = sequelize.define('tb_area_negocio', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Area: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      bl_area: {
        type: DataTypes.INTEGER,
        defaultValue: null
      }
    }, {
      tableName: 'tb_area_negocio',
      timestamps: false
    });
  
    return AreaNegocio;
  };
  