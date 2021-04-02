const express = require('express');
const router = express.Router();

// controllers
const authCtrl = require('../controllers/auth/AuthCtrl');
const calificacionesCtrl = require('../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');
//const { check } = require('express-validator');

// const auth = require('../../api/modulo_login/routes/auth');
const { login } = require('../../api/modulo_login/controllers/AuthCtrl');

router.get('/', authCtrl.pantalla_inicio);
router.get('/auth/login', authCtrl.pageAuth);
router.get('/auth/recuperacion', authCtrl.recuperacion);
router.get('/auth/new_password', authCtrl.newPassword);
router.get('/auth/correo', authCtrl.correo);
router.get('/auth/preguntas', authCtrl.preguntas);

router.get('/home', authCtrl.home);

router.get('/calificaciones', calificacionesCtrl.pantalla_inicio);

// Rutas API modulo_login
router.post('/api/auth/login', login);

router.get('*', (req, res) => res.redirect('/'));
module.exports = router;
