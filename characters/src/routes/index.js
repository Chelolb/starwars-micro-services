const { Router } = require('express');
const controlers = require('../controlers');
const middlewares = require('../middlewares');


const router = Router();

router.get('/', controlers.getCharacters);
router.post('/', middlewares.charactermValidation, controlers.createCharacter);

module.exports = router;