module.exports = (sequelize, DataTypes) => {
    const Unidade = sequelize.define('Unidade', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      HUB: {
        type: DataTypes.STRING(50),
      },
      unidadeDeNegocio: {
        type: DataTypes.STRING(128),
        field: 'Unidade de Negocio'
      }
    }, {
      tableName: 'VW_UNIDADES',
      timestamps: false
    });
  
    return Unidade;
  };
  