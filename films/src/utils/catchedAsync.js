module.exports = (fn) => {              // capturador de error async
    return function (req, res, next) {
        fn(req, res).catch((err) => {
            next(err);
        })
    };
};


//fn => (req, res, next) => fn(req, res).catch((err) => next(err));