const mysqlConnection = require('../../../config/db');

exports.obtenerAsistencia = async (req, res) => {
    try {
        const asistencia = await mysqlConnection.query('SELECT * FROM asistencia');
        return res.json(asistencia);
    } catch (error) {
        console.log(error);
    }
}

exports.agregarAsistencia = async (req, res) => {
    
    const {estado_tipo_asistencia,observacion_tipo_asistencia,usr_registro,fecha_asistencia,id_estudiante,
        id_asignatura,id_docente } = req.body;
    
        const query = `CALL sp_InsertAsistencia (?, ?, ?, ?, ?, ?, ?);`;

    try {
        const result = await mysqlConnection.query(query,[estado_tipo_asistencia,observacion_tipo_asistencia,usr_registro,fecha_asistencia,id_estudiante,
            id_asignatura,id_docente]);
        return res.json({Status: 'Asistencia Agregada'});
    } catch (error) {
        console.log(error);
    }

}

exports.eliminarAsistencia= async (req, res) => {
    
    const {id_asist} = req.params;
    const query = 'CALL sp_deleteAsistencia(?)';

    try {
        const result = await mysqlConnection.query(query, [id_asist]);
        return res.json({Status: 'Asistencia Eliminada'});
    } catch (error) {
        console.log(error);
    }
}

exports.actualizarAsistencia = async (req, res) => {
    const {id_tipo_asistencia, fecha_asistencia, id_estudiante, id_asignatura, id_docente, usr_registro, 
        estado_tipo_asistencia, observacion_tipo_asistencia} = req.body;
    
    const{id} = req.params;
    
    const query = 'CALL sp_updateAsistencia(?, ?, ?, ?, ?, ?, ?, ?)';
    try {
        const result = await mysqlConnection.query(query, [id_tipo_asistencia, fecha_asistencia, id_estudiante, id_asignatura, id_docente, usr_registro, 
            estado_tipo_asistencia, observacion_tipo_asistencia]);
        return res.json({Status: 'Asistencia Actualizada'});
    } catch (error) {
        console.log(error);
    }
}