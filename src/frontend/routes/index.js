const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

// controllers vistas
const authCtrl = require('../controllers/auth/AuthCtrl');
const calificacionesCtrl = require('../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');

// Controladores modulo login
const { login, recuperarPassword, newPassword, passwordPreguntas } = require('../../api/modulo_login/controllers/AuthCtrl');
const { user } = require('../../api/modulo_login/controllers/userCtrl');
const { preguntas, getAllPreguntas } = require('../../api/modulo_login/controllers/preguntasCtrl');

// Middlewares modulo login
const { validarJWT } = require('../../api/modulo_login/middlewares/validar-jwt');
const { validarCampos } = require('../../api/modulo_login/middlewares/validar-campos');
const { esAdminRole, tieneRol } = require('../../api/modulo_login/middlewares/validar-rol');

router.get('/', authCtrl.pantalla_inicio);
router.get('/auth/login', authCtrl.pageAuth);
router.get('/auth/recuperacion', authCtrl.recuperacion);
router.get('/auth/new_password', authCtrl.newPassword);
router.get('/auth/correo', authCtrl.correo);
router.get('/auth/preguntas', authCtrl.preguntas);

router.get('/home', authCtrl.home);

router.get('/calificaciones', calificacionesCtrl.pantalla_inicio);

// Rutas API modulo_login
router.post('/api/auth/login', [check('correo', 'Debe ser un correo valido y es requerido').isEmail(), check('password', 'La contraseña debe contener al menos 4 dígitos y es requerido').isLength({ min: 4 }), validarCampos], login);

// Ruta recuperar contraseña
router.get('/api/auth/recuperarContrasenia', [check('correo', 'Debe ser un correo valido y es requerido').isEmail(), validarCampos], recuperarPassword);

// Ruta recuperar contraseña por preguntas
router.get('/api/auth/recuperarPorPreguntas', [check('correo', 'Debe ser un correo valido y es requerido').isEmail(), check('respuesta', 'La respuesta es obligatoria').not().isEmpty(), validarCampos], passwordPreguntas);

// Ruta para crear la nueva contraseña
router.put('/api/auth/nuevaContrasenia/:token', [check('password', 'La contraseña debe contener al menos 4 dígitos y es requerido').isLength({ min: 4 }), validarCampos], newPassword);
// router.put('/api/auth/nuevaContrasenia', [check('password', 'La contraseña debe contener al menos 4 dígitos y es requerido').isLength({ min: 4 }), validarCampos], newPassword);

// Ruta para probar los middlewares
router.get('/api/usuarios/:id', [validarJWT, esAdminRole, tieneRol(1, 3)], user);

// ruta insertar preguntas
router.post('/api/preguntas/:token', [check('respuesta1', 'La respuesta es obligatoria').not().isEmpty(), check('respuesta2', 'La respuesta es obligatoria').not().isEmpty(), validarCampos], preguntas);

router.get('/api/preguntas', getAllPreguntas);

router.get('*', (req, res) => res.redirect('/'));
module.exports = router;
