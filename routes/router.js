const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/mainController')

router.get('/', controller.home)
router.get('/creditos', controller.creditos)
module.exports = router;