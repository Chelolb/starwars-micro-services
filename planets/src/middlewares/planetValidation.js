module.exports = (req, res, next) => {
    const { name } = req.body;
    if(name) return next();
    else throw Error('Falta el nombre del planeta')
}