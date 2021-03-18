const express = require('express');
const router = express.Router();
const app = require('../../../server');

// controllers
const authCtrl = require('./seguridad'); 
//const { check } = require('express-validator'); 

router.get('/auth', authCtrl.pageAuth);
// router.get('/calificaciones', require('./registro_calificaciones'));

module.exports = router;