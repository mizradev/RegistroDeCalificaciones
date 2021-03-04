const mysqlConnection = require('../../../config/db');

exports.obtenerAlumnosPorIdDocente = async (req, res) => {
    try {
        const libros = await mysqlConnection.query('SELECT * FROM libros');
        return res.json(libros);
    } catch (error) {
        console.log(error);
    }
}

exports.obtenerNotasPorIdAlumno = (req, res) => {}

exports.registrarActividad = (req, res) => {}