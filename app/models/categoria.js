module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      descricao: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      bl_ativo: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      tableName: 'tb_categoria',
      timestamps: false
    });
  
    return Categoria;
  };