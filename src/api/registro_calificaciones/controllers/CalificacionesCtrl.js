const mysqlConnection = require('../../../config/db');

const { validationResult } = require('express-validator');

exports.obtenerNotasPorAlumno = (req, res) => {}

exports.obtenerAlumnosPorAsignaturaDocente = (req, res) => {}

exports.prueba = (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }

    const { email, edad, nombre } = req.body;

    return res.json({msg: 'Todo bien!', datos: [email, edad, nombre] });
}