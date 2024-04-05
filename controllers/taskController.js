const emailService = require('../services/emailService');
//const scheduleService = require('../services/scheduleService');
const schedule = require('node-schedule');
let globalJob = null;
exports.startService = (req, res) => {
    const task = req.body;
    console.log('TASK',task);
    const cronJob = '*/1 * * * *'; // Cada 5 minutos
    const date = req.body.date;
    console.log('DATE',date);

    // Lógica para enviar correos electrónicos con SendGrid
    
        try {
            // Enviar el correo
            console.log('TAASKBODY',task.email);
            const jobcito = schedule.scheduleJob(date, async function () {
                console.log('Enviando correo...');
                
                await emailService.sendMailFunction( { client: task.email });
            });
            console.log('JOBCITO',jobcito);
          } catch (error) {
            console.error('Error al enviar el correo:', error);
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

exports.send = async (req, res) => {
    const task = req.body;
    console.log('TASK',task);

    
        try {
            // Enviar el correo
            console.log('TAASKBODY',task.email);
            await emailService.sendMailFunction( { client: task.email });
            
          } catch (error) {
            console.error('Error al enviar el correo:', error);
          }

    return res.send('Servicio de envío de correos iniciado /test');
 }
exports.test = async (req, res) => {
    try {
     return  res.send('Hello world');
    } catch (error) {
     console.log(error, 'error');
    }
 }

 
 
