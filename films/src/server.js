const express = require('express');
const morgan = require('morgan');
const router = require('./routes')

const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use('/films', router);

//  --- controlador para tratamiento de errores 
server.use('*', (req, res) => {
    res.status(404).send('Not found');
});

server.use((err, req, res, next) => {
    res.status(500).send(err.message);
})
// --------------------------------------------

module.exports = server;
