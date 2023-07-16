class ClientError extends Error {   // crea una clase que hereda de Error
    constructor(message, statusCode = 400) {    // por defecto el statusCode es 400
        super(message);                         // se asignan sus nuevas propiedades
        this.statusCode = statusCode
    }
}

module.exports = { ClientError };