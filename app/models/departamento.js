module.exports = (sequelize, DataTypes) => {
    const Departamento = sequelize.define('Departamento', {
      Area_Negocio: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      Departamento: {
        type: DataTypes.STRING(255),
      }
    }, {
      tableName: 'VW_DEPARTAMENTOS',
      timestamps: false
    });
  
    return Departamento;
  };
  