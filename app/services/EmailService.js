const nodemailer = require('nodemailer');

async function enviarEmail() {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: '465',
            secure: true,
            auth: {
                user: 'filipe.almeida@korasaude.com.br',
                pass: 'pjfteyygobbvnuzc'
            }
        });

        await transport.sendMail({
            from: 'Filipe Almeida <filipe.almeida@korasaude.com.br>',
            to: 'filipesilva504@gmail.com',
            subject: 'Appsheet - Tickets Gerais - Novo Chamado',
            text: 'Teste de envio de e-mail',
            html: `
            <p><img alt="" src="https://uploaddeimagens.com.br/images/004/756/786/thumb/Logo_Kora.png?1710514563" /></p>
            <p> Olá prezado(a)!<br>Um ticket foi aberto para sua área, para acessar <strong><a href="https://www.appsheet.com/start/894918c5-7548-431d-96c0-5c1f2f0a51a0#view=Meus%20Chamados"> clique aqui.</a></strong></p>
            <p>Dados do Chamado:
            <p>
                N° Ticket: 9825
                Aberto Por: Filipe Almeida
                Status: Em Aberto
                Descrição Atividade: ldsjhkdy
            </p>
            <p><i>Mensagem enviada de forma automática, favor não responder.</i></p>
            `
        });

        console.log('E-mail enviado com sucesso.');
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
    }
}

module.exports = { enviarEmail }
