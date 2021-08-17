const mysqlConnection = require('../../../config/db');

const { validationResult } = require('express-validator');

exports.obtenerNotasPorAlumno = async (req, res) => {   const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    const { nota_final, numero_cuenta, nombre_asignatura, seccion, observacion  } = req.body;
    const query ='call obtenerNotasPorAlumno(?,?,?,?,?)'
    try {
        const result = await mysqlConnection.query(query,[nota_final, numero_cuenta, nombre_asignatura, seccion, observacion ]);
        return res.status(200).json({error: false, datos: result}); 
    } catch (error) {
        console.log(error);
    }
  }
exports.obtenerAlumnosPorClase = async (req, res) => {   const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    const { numero_cuenta,nombre_persona,nota_final,observacion } = req.body;
    const query ='call obtenerAlumnosPorClase(?,?,?,?)';
        try {
            const result = await mysqlConnection.query(query,[numero_cuenta,nombre_persona,nota_final,observacion ]);
            return res.status(200).json({error: false, datos: result}); 
        } catch (error) {
            console.log(error);
        }
    }

    exports.informacion_notas = async (req, res) => {   const errors = validationResult(req);
        if(!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
        const {nombre_asignatura,seccion, nombre_persona,parcial } = req.body;
        const query ='call informacion_notas(?)';
        try {
            const result = await mysqlConnection.query(query,[nombre_asignatura,seccion, nombre_persona,parcial ]);
            return res.status(200).json({error: false, datos: result}); 
        } catch (error) {
            console.log(error);
        }
    }