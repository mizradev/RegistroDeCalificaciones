const express = require('express');
const router = express.Router();


// controllers
const authCtrl = require('../controllers/auth/AuthCtrl'); 
const calificacionesCtrl = require('../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');
//const { check } = require('express-validator'); 

router.get('/auth/login', authCtrl.pageAuth);
router.get('/auth/recuperacion', authCtrl.recuperacion);
router.get('/auth/new_password', authCtrl.newPassword);
router.get('/', authCtrl.pantalla_inicio);

router.get('/calificaciones', calificacionesCtrl.pantalla_inicio);
// router.get('/calificaciones', require('./registro_calificaciones'));


router.get('*', (req, res) => res.redirect('/') );
module.exports = router;