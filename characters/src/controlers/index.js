const { catchedAsync } = require('../utils')    //capturador de error async

module.exports={
    getCharacters: catchedAsync(require('./getCharacters')),
    createCharacter: catchedAsync(require('./createCharacter')),
}