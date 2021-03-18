const express = require('express');
const router = express.Router();

//controllers
const RegistroCalificacionesCtrl = require('../../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');

//const { check } = require('express-validator');

router.get('/', RegistroCalificacionesCtrl.pantalla_inicio);

module.exports = router;