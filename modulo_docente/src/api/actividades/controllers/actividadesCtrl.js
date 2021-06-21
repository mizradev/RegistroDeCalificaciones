const { validationResult, Result } = require('express-validator');
const mysqlConnection = require('../../../config/db');

exports.obtenerActividades = async (req, res) => {
    try {
        const actividades = await mysqlConnection.query('SELECT * FROM actividades');
        return res.json(actividades);
    } catch (error) {
        console.log(error);
    }
}

exports.agregarActividadesExamen = async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()})  
    } 
     const {clase,seccion,titulo,valor,fecha,hi,hf,duracion,usr_registro} = req.body;

     const query = `CALL sp_InsertActividad (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
   
     try {
         const result = await mysqlConnection.query(query,["EXAMEN",clase,duracion,fecha,fecha,valor,"INDIVIDUAL",'1','1','2',usr_registro]);
         return res.json({Status: 'Actividad Agregada'});
     } catch (error) {
        return(error);
     }

     

    //return res.json({msg:'todo bien',datos:[clase,seccion,titulo,valor,fecha,hi,hf,duracion]})
}
exports.agregarActividadesPrueba= async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()})  
    } 
     const {clase,seccion,titulo,valor,fecha,hi,hf,duracion,usr_registro} = req.body;

     const query = `CALL sp_InsertActividad (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
   
     try {
         const result = await mysqlConnection.query(query,["PRUEBA",clase + " Seccion:" + seccion,duracion,fecha+" hi",fecha+" hf",valor,"INDIVIDUAL",'1','1','2',usr_registro]);
         return res.json({Status: 'Actividad Agregada'});
     } catch (error) {
        return(error);
     }
  //return res.json({msg:'todo bien',datos:[clase,seccion,titulo,valor,fecha,hi,hf,duracion]})
}


exports.agregarActividadesTareas= async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()})  
    } 
     const {codigoClase,codigoSeccion,nombreTarea,puntajeTarea,fechaFin,horaFin,descripTareas,archivo} = req.body;

     const query = `CALL sp_InsertActividad (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
   
     try {
         const result = await mysqlConnection.query(query,[nombreTarea,descripTareas ," " ,fechaFin,fechaFin,puntajeTarea,"INDIVIDUAL",'1','1','2',usr_registro]);
         return res.json({Status: 'Actividad Agregada'});
     } catch (error) {
        return(error);
     }
  //return res.json({msg:'todo bien',datos:[clase,seccion,titulo,valor,fecha,hi,hf,duracion]})
}

exports.agregarOtrasActividades= async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()})  
    } 
     const {codigoClase,codigoSeccion,nombreTarea,puntajeTarea,fechaFin,horaFin,descripTareas,archivo} = req.body;

     const query = `CALL sp_InsertActividad (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
   
     try {
         const result = await mysqlConnection.query(query,["Tarea",codigoClase + " Seccion:" + codigoSeccion,nombreTarea,fechaFin+" hi",fechaFin+" hf",puntajeTarea,"INDIVIDUAL",'1','1','2',usr_registro]);
         return res.json({Status: 'Actividad Agregada'});
     } catch (error) {
        return(error);
     }
  //return res.json({msg:'todo bien',datos:[clase,seccion,titulo,valor,fecha,hi,hf,duracion]})
}




exports.agregarActividades = async (req, res) => {
    
    const {nombre_actividad,descripcion_actividad,duracion,fecha_inicio,fecha_finalizacion,puntaje,
    forma_trabajo,id_calendario,id_asistencia,tipo,usr_registro} = req.body;
    
        const query = `CALL sp_InsertActividad (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    try {
        const result = await mysqlConnection.query(query,[nombre_actividad,descripcion_actividad,duracion,fecha_inicio,fecha_finalizacion,puntaje,
            forma_trabajo,id_calendario,id_asistencia,tipo,usr_registro]);
        return res.json({Status: 'Actividad Agregada'});
    } catch (error) {
        console.log(error);
    }

}



exports.listarCursos = async (req, res) => {
    
    const{id} = req.params;
    
        const query = "SELECT * FROM `asignatura` WHERE ID_DOCENTE='"+ id +"'";

    try {
        const result = await mysqlConnection.query(query);
        return res.json(result);
    } catch (error) {
        console.log(error);
    }

}



exports.listarCurso = async (req, res) => {
        
        const query = "SELECT * FROM `actividades` where puntaje >0";

    try {
        const result = await mysqlConnection.query(query);
        return res.json(result);
    } catch (error) {
        console.log(error);
    }

}

exports.listarClase = async (req, res) => {
        
    const query = "SELECT * FROM `actividades` where puntaje =0";

try {
    const result = await mysqlConnection.query(query);
    return res.json(result);
} catch (error) {
    console.log(error);
}

}



exports.eliminarActividades= async (req, res) => {
    
    const {id} = req.params;
    const query = 'CALL sp_deleteActividades(?)';

    try {
        const result = await mysqlConnection.query(query, [id]);
        if (result) {
            return res.json({Status: 'Actividad Eliminada ' +id});
        }else{
            return res.json({Status: 'No se pudo eliminar'});
        }
       
    } catch (error) {
        console.log(error);
    }
}

exports.selectListadoAlumnos= async (req, res) => {
    
    const query = 'CALL sp_selecAlumnos()';

    try {
        const result = await mysqlConnection.query(query);
        return res.json(result);
    } catch (error) {
        console.log(error);
    }
    
}



//SELECT * FROM `asignatura` WHERE
exports.actualizarActividad = async (req, res) => {
    const {id_actividad,id_calendario, id_asistencia, nombre_actividad, descripcion_actividad, duracion,
    fecha_inicio, fecha_finalizacion, puntaje, forma_trabajo, usr_registro, tipo_actividades} = req.body;
    
    const{id} = req.params;
    
    const query = 'CALL sp_updateActividades(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    try {
        const result = await mysqlConnection.query(query, [id_actividad,id_calendario, id_asistencia, nombre_actividad, descripcion_actividad, duracion,
            fecha_inicio, fecha_finalizacion, puntaje, forma_trabajo, usr_registro, tipo_actividades]);
        return res.json({Status: 'Actividad Actualizada'});
    } catch (error) {
        console.log(error);
    }
}