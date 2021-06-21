const mysqlConnection = require('../../../config/db');

/*exports.obtenerDocentePorId = async (req, res) => {
    const { id } = req.params;
    const query = 'sp_selectDocentes(?)';
    try {
        const docente = await mysqlConnection.query(query,[id]);
        return res.json(docente);
    } catch (error) {
        console.log(error);
    }
}*/


exports.obtenerDocentePorId = async (req, res) => {
    const { id } = req.params;
    try {
        const docente = await mysqlConnection.query('SELECT * FROM docente WHERE id_docente = ?',[id]);
        return res.json(docente);
    } catch (error) {
        console.log(error);
    }
}



/*exports.agregarDocente = async (req, res) => {
    
    const {numero_identidad, nombre_persona, edad_persona, genero_persona, estado_civil, fecha_nacimiento,
        _ind, foto, usr_registro, _rol, nombre_usuario, correo_usuario, password_usuario, pri_usuario,
        ip_usuario, mac_usuario, numero_telefono, tipo_telefono, ind_telefono, descripcion_direccion,
        _especialidad, _numero_emp_est} = req.body;
    
        const query = `CALL InsertUsuario_docente_estudiate(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?);`;

    try {
        const result = await mysqlConnection.query(query,[numero_identidad, nombre_persona, edad_persona, genero_persona, estado_civil, fecha_nacimiento,
            _ind, foto, usr_registro, _rol, nombre_usuario, correo_usuario, password_usuario, pri_usuario,
            ip_usuario, mac_usuario, numero_telefono, tipo_telefono, ind_telefono, descripcion_direccion,
            _especialidad, _numero_emp_est]);
        return res.json({Status: 'Docente Agregado'});
    } catch (error) {
        console.log(error);
    }

}*/

exports.actualizarDocente = async (req, res) => {
    const {especialidad} = req.body;
    
    const{id_doc} = req.params;
    
    const query = 'CALL sp_updateDocente(?, ?)';
    try {
        const result = await mysqlConnection.query(query, [id_doc, especialidad]);
        return res.json({Status: 'Docente Actualizado'});
    } catch (error) {
        console.log(error);
    }
}

/*exports.eliminarDocente = async (req, res) => {
    
    const {ID_docent} = req.params;
    const query = 'CALL sp_deleteDocente(?)';

    try {
        const result = await mysqlConnection.query(query, [ID_docent]);
        return res.json({Status: 'Docente Eliminado'});
    } catch (error) {
        console.log(error);
    }
}*/