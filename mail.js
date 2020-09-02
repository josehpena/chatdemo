module.exports = (to, subject, text) => {
    const mailer = require('nodemailer');
    //usando SMTP envio
    const smtpTransport = mailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_PORT),
        secure: false, //upgrade later with STARTTLS
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const message = {
        from: process.env.SMTP_USERNAME,
        to,
        subject,
        text,
    }

    smtpTransport.sendMail(message, (error, response) => {
        if (error)
            console.log(error)
        else
            console.log("Email enviado: " + response.message);
        smtpTransport.close();
    })

}