const express = require('express');
const app = require('./config/app');
const serverless = require('serverless-http');



/*
exports.handler = async () => {
  app.initServer();
};
*/


module.exports.handler = serverless(app.default);