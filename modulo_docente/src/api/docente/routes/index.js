const express = require('express');
const router = express.Router();

//controllers
const docenteCtrl = require('../controllers/docenteCtrl');

//const { check } = require('express-validator');

router.get('/:id', docenteCtrl.obtenerDocentePorId);
/*router.get('/', docenteCtrl.obtenerAsistencia);*/
router.put('/:id', docenteCtrl.actualizarDocente);
/*router.delete('/:id', docenteCtrl.eliminarDocente);*/
/*router.post('/', docenteCtrl.agregarDocente);*/

module.exports = router;