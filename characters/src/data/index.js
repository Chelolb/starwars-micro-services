const characters = require('./characters.json');

module.exports = {
    list: async () => {
        return characters;
    },

    create: async () => {
        throw Error('Error al momento de crear el personaje');
    },
}