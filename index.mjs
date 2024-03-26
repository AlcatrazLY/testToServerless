import express from 'express';

// Crear una aplicación de Express
const app = express();

// Definir una ruta para devolver "Hola Mundo"
app.get('/', (_, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Exportar la función handler
export const handler = async () => {
  // Retornar una respuesta por defecto, ya que el servidor Express manejará las solicitudes HTTP
  return {
    statusCode: 200,
    body: 'Servidor Express en ejecución',
  };
};

