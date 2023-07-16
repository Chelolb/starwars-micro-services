const planets = require('./planets.json');

module.exports = {
    list: async () => {
        return planets;
    },
        
    create: async () => {
        throw Error('Error al momento de crear el planeta');
    },
}