const express = require('express');
const router = express.Router();


// controllers
const authCtrl = require('../controllers/auth/AuthCtrl'); 
//const { check } = require('express-validator'); 

router.get('/auth', authCtrl.pageAuth);
router.get('/', authCtrl.pantalla_inicio);
// router.get('/calificaciones', require('./registro_calificaciones'));

module.exports = router;