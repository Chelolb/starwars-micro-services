const { Router } = require('express');
const controlers = require('../controlers');
const middlewares = require('../middlewares');


const router = Router();            // enrutador de consultas

router.get('/', controlers.getFilms);
router.post('/', middlewares.filmValidation, controlers.createFilms);


module.exports = router;
