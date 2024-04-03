const emailService = require('../services/emailService');
//const scheduleService = require('../services/scheduleService');
const schedule = require('node-schedule');
let globalJob = null;
exports.startService = (req, res) => {
    const task = req.body;
    console.log('TASK',task);
    const cronJob = '*/1 * * * *'; // Cada 5 minutos

    // Lógica para enviar correos electrónicos con SendGrid
    if (task) {
        try {
            // Enviar el correo
            globalJob = schedule.scheduleJob(cronJob, async () => {
                console.log('Enviando correo...');
                console.log('TAASKBODY',task.email);
                await emailService.sendMailFunction( { client: task.email });
            });
          } catch (error) {
            console.error('Error al enviar el correo:', error);
          }
    }

    return res.send('Servicio de envío de correos iniciado');
};

exports.stopService = (req, res) => {
    // Lógica para detener el servicio con Node-Schedule
    const stop = req.body.confirmStop;
    if (stop)  {
        globalJob.cancel();

        res.send('Servicio de envío de correos detenido');
    }
    
};
