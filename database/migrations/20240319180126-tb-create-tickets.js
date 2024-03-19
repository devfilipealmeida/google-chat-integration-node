'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_chatbot_testes', {
      id: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cod_fluxo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      status: Sequelize.STRING(100),
      abertura: Sequelize.STRING(50),
      nome: Sequelize.STRING(255),
      departamento: Sequelize.STRING(150),
      email_solicitante: Sequelize.STRING(150),
      hub: Sequelize.STRING(20),
      unidade: Sequelize.STRING(300),
      criticidade: Sequelize.STRING(30),
      categoria: Sequelize.STRING(100),
      subcategoria: Sequelize.STRING(100),
      assunto: Sequelize.STRING(255),
      descricao: Sequelize.STRING(1000),
      anexo: Sequelize.STRING(600),
      ticket_glpi: Sequelize.STRING(100),
      outros_area_negocio: Sequelize.STRING(150),
      novo_usuario: Sequelize.STRING(255),
      usuario_modelo: Sequelize.STRING(255),
      area_negocio: Sequelize.STRING(255),
      centro_custo: Sequelize.STRING(255),
      cpf: Sequelize.INTEGER,
      cargo: Sequelize.STRING(255),
      tipo_usuario: Sequelize.STRING(255),
      telefone: Sequelize.STRING(20),
      empresa_colab_cadastrado: Sequelize.STRING(100),
      matricula: Sequelize.INTEGER,
      sigla_cp: Sequelize.STRING(150),
      registro_cp: Sequelize.STRING(150),
      matricula_senior: Sequelize.INTEGER,
      email_executor: Sequelize.STRING(150),
      aprovador_sap: Sequelize.STRING(150),
      executor: Sequelize.STRING(150),
      cancelado_por: Sequelize.STRING(255),
      finalizado_por: Sequelize.STRING(255),
      resposta_chamado: Sequelize.STRING(1000),
      anexo_resposta: Sequelize.STRING(600),
      data_atual: Sequelize.STRING(150),
      grupo: Sequelize.STRING(150),
      sla: Sequelize.STRING(100),
      st_sla: Sequelize.STRING(100),
      st_sla_corrido: Sequelize.STRING(100),
      ct_tempo_corrido: Sequelize.STRING(20),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_chatbot_testes');
  },
};
