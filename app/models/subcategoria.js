module.exports = (sequelize, DataTypes) => {
    const Subcategoria = sequelize.define('Subcategoria', {
      Descricao: {
        type: DataTypes.STRING(100),
      },
      Categoria: {
        type: DataTypes.STRING(100),
      }
    }, {
      tableName: 'VW_TICKETS_SUBCATEGORIAS',
      timestamps: false
    });
  
    return Subcategoria;
  };
  