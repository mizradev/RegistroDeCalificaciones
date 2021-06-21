const express = require('express');
const router = express.Router();

//controllers
const asistenciaCtrl = require('../controllers/asistenciaCtrl');

//const { check } = require('express-validator');

router.get('/', asistenciaCtrl.obtenerAsistencia);
router.post('/', asistenciaCtrl.agregarAsistencia);
router.delete('/:id', asistenciaCtrl.eliminarAsistencia);
router.put('/:id', asistenciaCtrl.actualizarAsistencia);
module.exports = router;