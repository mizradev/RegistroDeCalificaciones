
const express = require('express');
const router = express.Router();



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