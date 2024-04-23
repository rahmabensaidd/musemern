const nodemailer = require('nodemailer');


const sendEmail =  async (option) => {
    const transporter = nodemailer.createTransport({
       // host: process.env.EMAIL_HOST, 
       // port: process.env.EMAIL_USER , 
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const emailOptions = {
        from: `Musée le pinceau médical <${process.env.EMAIL_USER}>`,
        to: option.email,
        subject: option.subject,
        text: option.message,
        html:option.html,
        attachments:option.attachments
    }

    await transporter.sendMail(emailOptions);
}

module.exports = sendEmail ;