const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/heroesController')

router.get('/heroes', controller.heroes);
router.get('/heroes/detalles/:id', controller.detalle);
router.get('/heroes/bio/:id/:ok?', controller.bio)

module.exports= router;