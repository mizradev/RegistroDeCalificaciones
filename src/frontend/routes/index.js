
const express = require('express');
const router = express.Router();

// controllers vistas
const authCtrl = require('../controllers/auth/AuthCtrl');

// rutas de las pantallas modulo_login
router.get('/', authCtrl.pantalla_inicio);
router.get('/auth/login', authCtrl.pageAuth);
router.get('/auth/recuperacion', authCtrl.recuperacion);
router.get('/auth/new_password', authCtrl.newPassword);
router.get('/auth/correo', authCtrl.correo);
router.get('/auth/preguntas', authCtrl.preguntas);
router.get('/auth/respuestas/:token', authCtrl.respuestas);
router.get('/home', authCtrl.home);

// router.get('*', (req, res) => res.redirect('/'));
module.exports = router;

// controllers
const authCtrl = require('../controllers/auth/AuthCtrl'); 
const calificacionesCtrl = require('../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');
//Modulo Usuario

const UserCtrl = require('../controllers/mod_Usuario/modUsuarioCtrl'); 
//const validaciones = requiere('../static/js/Usuario/validaciones'); //Validaciones
//const { check } = require('express-validator'); 
router.get('/', authCtrl.pantalla_inicio);

router.get('/calificaciones', calificacionesCtrl.pantalla_inicio);
//router.get('/usuario',UsuarioCtrl.pantalla_administrador);
//router.get('/usuario/administrador',UsuarioCtrl.pantalla_administrador);
// router.get('/informacionG',UsuarioCtrl.pantalla_Estudiantesinfor);
router.get('/home',UserCtrl.pantalla_home);
router.get('/agregarusuario',UserCtrl.pantalla_agregarusuario);
router.get('/usuarioperfil',UserCtrl.pantalla_usuarioperfil);
router.get('/Datospersonas',UserCtrl.pantalla_datospersonas);

//router.get('/validaciones',UserCtrl.validaciones);
//router.get('/Administrador', modUsuarioCtrl.pantalla_administrador);


//router.get('*', (req, res) => res.redirect('/') );
module.exports = router;
