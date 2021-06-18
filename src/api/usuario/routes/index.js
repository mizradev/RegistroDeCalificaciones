const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../config/db');

//controllers
const UsuarioCtrl = require('../controllers/UsuarioCtrl');

const { check } = require('express-validator');
router.get('/', UsuarioCtrl.SelectDatosPersona);
router.get('/', UsuarioCtrl.SeleccionarDatosPrincipales);
 //router.get('/', UsuarioCtrl.select_Rol);
 //router.get('/:datos',UsuarioCtrl.SelectDatosPersona );
 
 router.post('/',[
  check('numero_identidad').notEmpty(),
  check('nombre_persona','Se esperaba un dato').notEmpty().isLength({max: 30}).withMessage('Debe tener un maximo de 30'),
  check('edad_persona','Se esperaba un dato numerico').isNumeric(),
  check('genero_persona','Seleccione un dato').notEmpty(),
  check('estado_civil','Seleccione un dato').notEmpty().exists(),
  check('fecha_nacimiento').isDate(),
check('foto').notEmpty(),
check('usr_registro').notEmpty(),
 check('_rol').notEmpty().isNumeric(),
  check('nombre_usuario').bail(),
 check('correo_usuario').isEmail().withMessage({message: 'No es un correo electrónico'}),
  check('password_usuario').not().isIn(['123', 'password', 'god'])
   .isLength({ min: 5, max: 20 }).withMessage('debe tener al menos 5 caracteres de longitud y un maximo de 20')
    .matches( /\d/).withMessage('debe contener un número'),
 check('numero_telefono','No es un dato numerico').isNumeric(),
 check('tipo_telefono').notEmpty().exists(), 
  check('descripcion_direccion').notEmpty(),
  check('_especialidad').exists(),
 check('_numero_emp_est').exists(),
 check('puesto').exists(),
 check('facultad').exists()
],UsuarioCtrl.InsertarUsuario);

 router.put('/:ID',[
  check('NumeroIdentidad').notEmpty(),
  check('NombrePersona','Se esperaba un dato').notEmpty().isLength({max: 30}).withMessage('Debe tener un maximo de 30'),
  check('EdadPersona','Se esperaba un dato numerico').isNumeric(),
  check('GeneroPersona','Seleccione un dato').notEmpty(),
  check('EstadoCivil','Seleccione un dato').notEmpty().exists(),
  check('FechaNacimiento').isDate(),
check('Foto').notEmpty(),
check('UsrRegistro').notEmpty(),
 check('_rol').notEmpty().isNumeric(),
  check('NombreUsuario').bail(),
 check('CorreoUsuario').isEmail().withMessage({message: 'No es un correo electrónico'}),
  check('PasswordUsuario').not().isIn(['123', 'password', 'god'])
   .isLength({ min: 5, max: 20 }).withMessage('debe tener al menos 5 caracteres de longitud y un maximo de 20')
    .matches( /\d/).withMessage('debe contener un número'),
 check('NumeroTelefono','No es un dato numerico').isNumeric(),
 check('TipoTelefono').notEmpty().exists(), 
  check('DescripcionDireccion').notEmpty(),
  check('Puesto').exists(),
 check('Facultad').exists(),
 check('Numero_Cuenta').exists()
],UsuarioCtrl.actualizarUsuario);
 router.delete('/:_id_usuario', UsuarioCtrl.eliminarUsuario);


 
module.exports = router;