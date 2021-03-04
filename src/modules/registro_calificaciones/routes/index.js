const express = require('express');
const router = express.Router();
//controllers
const CalificacionesCtrl = require('../controllers/CalificacionesCtrl');

//const { check } = require('express-validator');

router.get('/', CalificacionesCtrl.obtenerAlumnosPorIdDocente);
router.get('/:id', CalificacionesCtrl.obtenerNotasPorIdAlumno);
router.post('/actividades', CalificacionesCtrl.registrarActividad);


module.exports = router;