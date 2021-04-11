const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

// controllers
const authCtrl = require('../controllers/auth/AuthCtrl');
const calificacionesCtrl = require('../controllers/registro_calificaciones/ModRegistroCalificacionesCtrl');

// Controlador modulo login
const { login, recuperarPassword, newPassword } = require('../../api/modulo_login/controllers/AuthCtrl');
const { user, userPost } = require('../../api/modulo_login/controllers/userCtrl');

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

// Ruta para crear la nueva contraseña
router.put('/api/auth/nuevaContrasenia/:token', [check('password', 'La contraseña debe contener al menos 4 dígitos y es requerido').isLength({ min: 4 }), validarCampos], newPassword);
// router.put('/api/auth/nuevaContrasenia', [check('password', 'La contraseña debe contener al menos 4 dígitos y es requerido').isLength({ min: 4 }), validarCampos], newPassword);

// Ruta para probar los middlewares
router.get('/api/usuarios/:id', [validarJWT, esAdminRole, tieneRol(1, 3)], user);

router.post('/api/usuarios', [check('correo', 'El correo es obligatorio').isEmail(), check('password', 'La contraseña debe contener al menos 4 dígitos y es requerido').isLength({ min: 4 }), validarCampos], userPost);

router.get('*', (req, res) => res.redirect('/'));
module.exports = router;
