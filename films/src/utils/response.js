module.exports = (res, statusCode, data) =>{ // controlador de respuestas
    res.status(statusCode).json({
        error: false,
        data,
    });
};