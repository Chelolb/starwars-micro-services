const { catchedAsync } = require('../utils')    //capturador de error async

module.exports = {                      // controlador de las distintas consultas
    getFilms: catchedAsync(require('./getFilms')),
    createFilms: catchedAsync(require('./createFilms'))
}
