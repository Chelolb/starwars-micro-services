const express = require('express');
const morgan = require('morgan');
const router = require('./routes')

const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use('/characters', router);

//  --- controlador para tratamiento de errores 
server.use('*', (req, res) => {
    res.status(404).send('Not found');
});

//     Personaliza mensaje y Codigo Error
server.use((err, req, res, next) => {      
    res.status(err.statusCode || 500).json({
        error: true,
        message: err.message,
    });
})
// --------------------------------------------

module.exports = server;