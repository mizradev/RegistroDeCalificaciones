const express = require('express');
const router = express.Router();

//controllers
const actividadesCtrl = require('../controllers/actividadesCtrl');

const { check } = require('express-validator');

router.get('/obtenerActividades', actividadesCtrl.obtenerActividades);


router.put('/actualizarActividad/', actividadesCtrl.actualizarActividad);
router.delete('/eliminarActividades/:id', actividadesCtrl.eliminarActividades);

router.post('/agregarActividades', actividadesCtrl.agregarActividades);
router.post('/examen',[
    check('clase','Se esperaba un valor minimo de 4 caracteres').isLength({min:4}),
    check('seccion','Este valor no es numerico').isNumeric(),
    check('titulo','Se esperaba un valor minimo de 4 caracteres').isLength({min:4}),
    check('valor','Este valor no es numerico').isNumeric(),
    check('fecha','Error en la fecha').isDate(),
    check('hi'),
    check('hf'),
    check('duracion','Este valor no es numerico').isNumeric(),
    check('usr_registro','Se esperaba un valor minimo de 4 caracteres').isLength({min:4})

],actividadesCtrl.agregarActividadesExamen);


router.post('/prueba',[
    check('clase','Se esperaba un valor minimo de 4 caracteres').isLength({min:4}),
    check('seccion','Este valor no es numerico').isNumeric(),
    check('titulo','Se esperaba un valor minimo de 4 caracteres').isLength({min:4}),
    check('valor','Este valor no es numerico').isNumeric(),
    check('fecha','Error en la fecha').isDate(),
    check('hi'),
    check('hf'),
    check('duracion','Este valor no es numerico').isNumeric(),
    check('usr_registro','Se esperaba un valor minimo de 4 caracteres').isLength({min:4})

],actividadesCtrl.agregarActividadesPrueba);



//********************RUDY */
router.get('/listarcursos/:id', actividadesCtrl.listarCursos);
router.get('/listarcurso/', actividadesCtrl.listarCurso);
router.get('/listarclase/', actividadesCtrl.listarClase);


router.post('/tareas', actividadesCtrl.agregarActividadesTareas);
router.post('/otrasactividades', actividadesCtrl.agregarOtrasActividades);
router.get('/listadoAlumnos', actividadesCtrl.selectListadoAlumnos);

module.exports = router;