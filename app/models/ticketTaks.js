module.exports = (sequelize, DataTypes) => {
    const TicketTask = sequelize.define('TicketTask', {
        id: DataTypes.STRING(255),
        cod_task: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        cod_fluxo: DataTypes.INTEGER,
        status: DataTypes.STRING(255),
        descricao: DataTypes.STRING(600),
        executor: DataTypes.STRING(255),
        aberto_por: DataTypes.STRING(150),
        aberto_em: DataTypes.STRING(255),
        execucao: DataTypes.STRING(600),
        dt_fim: DataTypes.STRING(100),
        tempo: DataTypes.STRING(50),
        tempo_corrido: DataTypes.STRING(50),
        dt_atual: DataTypes.STRING(50),
        ds_concluido_por: DataTypes.STRING(100),
        ds_obs: DataTypes.STRING(150),
        ticket_sap: DataTypes.STRING(50),
        ticket_solman: DataTypes.STRING(50),
        ds_anexo: DataTypes.STRING(600),
        ultima_atualizacao: DataTypes.STRING(50),
    }, {
      tableName: 'tb_tickets_tasks',
      timestamps: false,
    });
  
    return TicketTask;
  };
  