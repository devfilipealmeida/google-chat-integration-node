module.exports = (sequelize, DataTypes) => {
    const Assunto = sequelize.define('Assunto', {
      Categoria: {
        type: DataTypes.STRING(100),
      },
      Subcategoria: {
        type: DataTypes.STRING(100),
      },
      Assunto: {
        type: DataTypes.STRING(100),
      }
    }, {
      tableName: 'VW_TICKETS_ASSUNTOS',
      timestamps: false
    });
  
    return Assunto;
  };
  