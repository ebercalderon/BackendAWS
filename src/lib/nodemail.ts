import nodemailer from 'nodemailer';

export const sendEmailVerify = async (subject: string, to: string, html: string) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'desarrollomovilg6@gmail.com',
            pass: 'bedfcepnjmgduvsy'
        },
        tls: {
            rejectUnauthorized: false
        }
    });



    const mailOptions = {
        from: '',
        to: to,
        subject: subject,
        html: html,
    };

    await transporter.sendMail( mailOptions );

} 