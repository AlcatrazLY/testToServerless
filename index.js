const express = require('express');
const app = require('./config/app');
const serverless = require('serverless-http');


app.initServer();

exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'Servidor Express en ejecución',
  };
};



//exports.handler = serverless(app.initServer());