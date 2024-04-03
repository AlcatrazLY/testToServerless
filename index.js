const express = require('express');
const app = require('./config/app');
const serverless = require('serverless-http');




exports.handler = async () => {
  app.initServer();
};



//exports.handler = serverless(app.initServer());