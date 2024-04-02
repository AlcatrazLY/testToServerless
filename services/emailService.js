const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

module.exports.sendMailFunction = async ({ client }) => {
    let userMail = 'dixonramirez834@gmail.com';
    //let userMail = 'pbarrera@estrategiayseguridad'
    // Configuración del transporte
    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true, // true para el puerto 465, false para otros puertos
        auth: {
            user: `${process.env.SENDGRID_API_KEY}`,
            pass: `${process.env.SENDGRID_API_PASS}`,
        },
        logger: true,
        debugger: true,
    });

    // Contenido del correo
    const mailOptions = {
        from: 'notificaciones@es.consulting',
        //to: 'eramirez@estrategiayseguridad.com',
        to: `${client}`,
        subject: 'Alerta de Seguridad: Posible Amenaza en tu Equipo',
        text: 'Cuerpo del correo en formato de texto',
        html: `
                    <p>Estimado Usuario,</p>
                    
                    <p>Este mensaje es para informarte que hemos detectado una posible amenaza de seguridad en tu equipo.</p>
            
                    <p>Detalles del incidente:</p>
                    <ul>
                        <li><strong>Equipo:</strong> machine_name</li>
                        <li><strong>Tipo de Amenaza:</strong> eventThreat</li>
                    </ul>
            
                    <p>Te recomendamos tomar las siguientes medidas:</p>
                    <ol>
                        <li>Realizar un escaneo profundo de seguridad en tu equipo usando el agente de Malwarebytes en tu equipo.</li>
                        <li>Cambiar tu contraseña de forma inmediata.</li>
                        <li>Si no reconoces la actividad, ponte en contacto con nuestro equipo de soporte.</li>
                    </ol>
            
                    <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en responder a este correo o contactarnos en support@es.consulting.</p>
            
                    <p>Gracias por tu cooperación.</p>
                    
                    <p>Atentamente,<br>El Equipo de Soporte de ES Consulting</p>
                `,
    };

    // Enviar el correo
    try {
        // Enviar el correo
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado con éxito:', info.response);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};
