var express = require('express');
var router = express.Router();

var isoController= require('../controllers/consulta_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'isoBD' });
});

router.get('/consulta/idG', isoController.idG);
router.get('/consulta/lista', isoController.lista);
router.get('/autor', isoController.autor);
module.exports = router;
