const express = require('express');
//const { check } = require('express-validator');
const router = express.Router();
//controllers
const CalificacionesCtrl = require('../controllers/CalificacionesCtrl');

const { check } = require('express-validator');

router.get('/alumnos', CalificacionesCtrl.obtenerAlumnosPorAsignaturaDocente);
router.post('/alumnos/',[
     check('numero_cuenta', 'El valor no es un dato numerico').isNumeric({max: 11}),
     check('nombre_persona','Se esperaba un valor minimo de 4 caracteres').isLength({min: 4}),
     check('parcial', 'El valor no es un dato numerico').isNumeric(),
     check('nota_final', 'El valor no es un dato numerico').isNumeric(),
      check('observacion', 'Se esperaba un valor minimo de 4 caracteres').isLength({min: 4}),
    ],CalificacionesCtrl.obtenerAlumnosPorAsignaturaDocente);

router.get('/alumnos/:id', CalificacionesCtrl.obtenerNotasPorAlumno);
router.post('/alumnos/:id',[
    check('nota_final', 'El valor no es un dato numerico').isNumeric(),
     check('numero_cuenta', 'El valor no es un dato numerico').isNumeric({max: 11}),
     check('nombre_asignatura','Se esperaba un valor minimo de 4 caracteres').isLength({min: 4}),
     check('seccion', 'El valor no es un dato numerico').isNumeric(),
      check('observacion', 'Se esperaba un valor minimo de 4 caracteres').isLength({min: 4}),
    ],CalificacionesCtrl.obtenerNotasPorAlumno);

router.get('/informacion', CalificacionesCtrl.informacion_notas);
router.post('/informacion',[
    check('nombre_asignatura', 'Se esperaba un valor minimo de 4 caracteres').isLength({min: 4}),
    check('Seccion', 'El valor no es un dato numerico').isNumeric(),
    check('nombre_persona','Se esperaba un valor minimo de 4 caracteres').isLength({min: 4}),
    check('parcial', 'El valor no es un dato numerico').isNumeric(),
],CalificacionesCtrl.informacion_notas);


//router.post('/nota/alumno/:id', CalificacionesCtrl.registrarActividad);

/* check('nombre', 'Este campo tiene que tener al menos 4 caracteres').isLength({min: 4}),
    check('edad', 'Se esperaba un dato numerico').isNumeric(),
    check('email', 'El email no es valido').isEmail() */


module.exports = router;