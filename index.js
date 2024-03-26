const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('¡Hola Mundo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'Servidor Express en ejecución',
  };
};

