const { catchedAsync } = require('../utils')    //capturador de error async

module.exports = {
    getPlanets: catchedAsync(require('./getPlanets')),
    createPlanets: catchedAsync(require('./createPlanets')),
}