const mysqlConnection = require('../../../config/db');

const { validationResult } = require('express-validator');

exports.SeleccionarDatosPrincipales = async (req, res) => {
    const query = 'CALL Select_DatosCompletos';
    try{
        const usuario = await mysqlConnection.query(query);
        return res.json(usuario);
    }catch (error) {
        console.log(error);
    }
}
/////////////
exports.SelectDatosPersona = async (req, res) => {
    try {
        const personas = await mysqlConnection.query(`CALL sp_datospersonas`());
        return res.json(personas);
    } catch (error) {
        console.log(error);
    }
}
////////
// exports.SelectDatosPersona =async(req, res)=>{
   
//     try{
//         const usuario= await mysqlConnection.query( `CALL  sp_SelectDatosCompletos;`());
//         return res.json(usuario);
//     }catch (error) {
//         console.log(error);
//     }
// }


//   exports.select_Rol = async (req, res) => {
   
//    const query= `CALL Select_Rol;`;

//    try {
//          const usuario = await mysqlConnection.query(query);
//           return res.json(usuario);
//       } catch (error) {
//           console.log(error);
//       }
//   }



 exports.InsertarUsuario = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(402).json({errors: errors.array()});
    }
  
    const {numero_identidad, nombre_persona, edad_persona, genero_persona, estado_civil, fecha_nacimiento, 
     foto, usr_registro,_rol, nombre_usuario,correo_usuario, password_usuario, numero_telefono, tipo_telefono, 
     descripcion_direccion,_especialidad,_numero_emp_est,puesto,facultad} = req.body;
    
        const query = `CALL InsertUsuario_docente_estudiate(?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    try{
        const result = await mysqlConnection.query(query,[numero_identidad, nombre_persona, edad_persona, genero_persona, estado_civil, fecha_nacimiento, foto, usr_registro,_rol, nombre_usuario,correo_usuario, password_usuario, numero_telefono, tipo_telefono,descripcion_direccion,_especialidad,_numero_emp_est,puesto,facultad]);
        return res.json({Status: 'Usuario Agregado'});
    } catch (error) {
        console.log(error);
    }

}

exports.actualizarUsuario = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(402).json({errors: errors.array()});
    }
   const {NumeroIdentidad, NombrePersona, EdadPersona, GeneroPersona, EstadoCivil, FechaNacimiento, 
        Foto, UsrRegistro, _rol, NombreUsuario,CorreoUsuario, PasswordUsuario,
        NumeroTelefono, TipoTelefono,DescripcionDireccion,Puesto,Facultad, Numero_Cuenta} = req.body;
   
   const{ID} = req.params;
   
   const query = 'CALL UpdateUsuario( ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)';
   try {
       const result = await mysqlConnection.query(query, [ID, NumeroIdentidad, NombrePersona, EdadPersona, GeneroPersona, EstadoCivil, FechaNacimiento, Foto, UsrRegistro, _rol, NombreUsuario,CorreoUsuario, PasswordUsuario, NumeroTelefono, TipoTelefono, DescripcionDireccion,Puesto,Facultad,Numero_Cuenta]);
       return res.json({Status: 'Usuario Actualizado'});
   } catch (error) {
       console.log(error);
   }
}

exports.eliminarUsuario = async (req, res) => {
    
    const {_id_usuario} = req.params;
    const query = 'CALL deleteUsuario_test(?)';

    try {
        const result = await mysqlConnection.query(query, [_id_usuario]);
        return res.json({Status: 'Usuario Eliminado'});
    } catch (error) {
        console.log(error);
    }
}