const films = require('./films.json');

module.exports = {
    list: async () => {
        return films;
    },
    
    create: async () => {
        throw Error('Error al momento de crear el film');
    },
}