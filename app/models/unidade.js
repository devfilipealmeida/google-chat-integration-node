module.exports = (sequelize, DataTypes) => {
    const Unidade = sequelize.define('Unidade', {
      HUB: {
        type: DataTypes.STRING(50),
      },
      unidadeDeNegocio: {
        type: DataTypes.STRING(128),
        field: 'Unidade de Negócio'
      }
    }, {
      tableName: 'VW_UNIDADES',
      timestamps: false
    });
  
    return Unidade;
  };
  