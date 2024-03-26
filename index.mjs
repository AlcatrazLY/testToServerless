// Importar Express
const express = require('express');

// Crear una aplicación de Express
const app = express();

// Definir una ruta para devolver "Hola Mundo"
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
