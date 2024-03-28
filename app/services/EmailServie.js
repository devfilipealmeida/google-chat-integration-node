const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
        user: 'filipe.almeida@korasaude.com.br',
        pass: '@N04h2021'
    }
})

transport.sendMail({
    from: 'Filipe Almeida <filipe.almeida@korasaude.com.br>',
    to: 'filipesilva504@gmail.com',
    subject: 'Teste de envio de e-mail',
    text: 'Teste de envio de e-mail',
    html: '<h1>Teste de envio de e-mail</h1>'
}).then(() => console.log('Enviado com sucesso.')).catch((err) => console.log(err))