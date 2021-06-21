const express = require('express');
const router = express.Router();


// controllers
const authCtrl = require('../controllers/auth/AuthCtrl'); 
const calificacionesCtrl = require('../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');
const { check } = require('express-validator'); 

router.get('/auth/login', authCtrl.pageAuth);
router.get('/auth/recuperacion', authCtrl.recuperacion);
router.get('/auth/new_password', authCtrl.newPassword);
router.get('/', authCtrl.pantalla_inicio);

router.get('/calificaciones', calificacionesCtrl.pantalla_inicio);

// **************************** KARLA ******************************
const ActividadesCtrl = require('../controllers/docente/DocenteCtrl');
router.get('/actividades', ActividadesCtrl.pantalla_inicio);
router.get('/examen', ActividadesCtrl.pantalla_inicioExamen);
router.get('/prueba', ActividadesCtrl.pantalla_inicioPrueba);


const modPlanificarCtrl = require('../controllers/docente/DocenteCtrl');
router.get('/plan-cursos', modPlanificarCtrl.pantalla_inicio_cursos);
router.get('/plan-curso', modPlanificarCtrl.pantalla_inicio_curso);
router.get('/plan-clase', modPlanificarCtrl.pantalla_inicio_clase);


const DocenteCtrl = require('../controllers/docente/DocenteCtrl');
router.get('/cursos-asignados', DocenteCtrl.CursosAsignados);
router.get('/asignar-tareas', DocenteCtrl.AsignarTareas);
router.get('/alumnosporseccion', DocenteCtrl.AlumnosPorSeccion);
router.get('/asignar-otro', DocenteCtrl.AsignarOtro );
router.get('/actividades-disponibles', DocenteCtrl.ActividadesDisponibles);

// router.get('/calificaciones', require('./registro_calificaciones'));


//router.get('*', (req, res) => res.redirect('/') );
module.exports = router;