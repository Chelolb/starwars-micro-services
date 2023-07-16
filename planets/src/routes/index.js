const { Router } = require('express');
const controlers = require('../controlers');
const middlewares = require('../middlewares');


const router = Router();

router.get('/', controlers.getPlanets)
router.post('/', middlewares.planetValidation, controlers.createPlanets)

module.exports = router