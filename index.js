const express = require('express');
const app = require('./config/app');
const serverless = require('serverless-http');




exports.handler = async () => {
  app.initServer();
  return {
    statusCode: 200,
    body: 'Servidor Express en ejecución',
  };
};



//exports.handler = serverless(app.initServer());