const express = require('express');
//const { check } = require('express-validator');
const router = express.Router();
//controllers
const CalificacionesCtrl = require('../controllers/CalificacionesCtrl');

const { check } = require('express-validator');

router.get('/alumnos', CalificacionesCtrl.obtenerAlumnosPorAsignaturaDocente);
router.get('/alumnos/:id', CalificacionesCtrl.obtenerNotasPorAlumno);
router.post('/prueba',[
    check('nombre', 'Se esperaba un valor minimo de 4 caracteres').isLength({min: 4}),
    check('edad', 'El valor no es un dato numerico').isNumeric(),
    check('email','Este email no es valido').isEmail()
],CalificacionesCtrl.prueba);
//router.post('/nota/alumno/:id', CalificacionesCtrl.registrarActividad);

/* check('nombre', 'Este campo tiene que tener al menos 4 caracteres').isLength({min: 4}),
    check('edad', 'Se esperaba un dato numerico').isNumeric(),
    check('email', 'El email no es valido').isEmail() */


module.exports = router;