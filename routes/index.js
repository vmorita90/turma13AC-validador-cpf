var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');

/* GET home page. */
router.get('/', function(req, res, next) {
  let cpf = req.query.cpf
  var usuario = new Usuario()
  usuario.cpf = cpf
  let cpfValidado = usuario.validarCPF()
  res.render('index', { title: 'Suppi Store', cpfValidado:cpfValidado, cpf:cpf });
});

module.exports = router;
