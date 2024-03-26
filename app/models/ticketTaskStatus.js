module.exports = (sequelize, DataTypes) => {
    const TicketTaskStatus = sequelize.define('TicketTaskStatus', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      st_descricao: {
        type: DataTypes.STRING(150),
      },
      contabiliza_sla: {
        type: DataTypes.INTEGER,
      }
    }, {
      tableName: 'tb_tickets_tasks_status',
      timestamps: false
    });
  
    return TicketTaskStatus;
  };
  