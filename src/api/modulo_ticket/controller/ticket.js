//Llamado de los procedimientos almacenados de modulo ticket
const mysqlConnection = require('../../../config/db');
const validations = require('../validations/validation');
//consulta de mensaje nuevo
exports.mensajeNuevo = async(req, res)=>{
    const {id} = req.params;
    const query = 'CALL sp_ViewNewMjs(?);';
       try {
           const nuevoMjs = await mysqlConnection.query(query,[id]);
           return res.json(nuevoMjs);
       } catch (error) {
           console.log(error);
       }
   
};

//consulta atraves de Id usuario 
exports.verMensajes=async(req, res)=>{
   const {id} =  req.params;
    try {
        const mensaje = await mysqlConnection.query('CALL sp_selectMensaje(?);',[id]);
        return res.json(mensaje);
    } catch (error) {
        console.log(error);
    }
};

//insertar mensaje
exports.insertMensaje= async(req,res)=>{
    validations.insertMjsValidation(req.body);
    const {descripcion,almacenamiento,person1,person2,asig} = req.body;
    const query = `CALL sp_instertTicket(?,?,?,?,?);`;
    //person1  envia el mensaje 
    //person2 recibe el mensaje
    try {
        const insertMjs = await mysqlConnection.query(query,[descripcion,almacenamiento,person1,person2,asig]);
        return res.json(insertMjs);
    } catch (error) {
        console.log(error);
    }
};


//update de mensajes nuevos atraves de id mensaje
exports.mensajeLeido=async(req,res)=>{
    const {id} = req.params;
    try {
        const updateMjs = await mysqlConnection.query('CALL sp_UpdateEstMJS(?)',[id]);
        return res.json(updateMjs);
    } catch (error) {
        console.log(error);
    }

};


//delete atraves de id mensaje
exports.eliminar_mensaje = async (req,res)=>{
    const {id} = req.params;
  
    try {
        const deleteMjs = await mysqlConnection.query('CALL sp_deleteMensaje(?)',[id]);
        return res.json (deleteMjs);

    } catch (error) {
        console.log(error)
    }

};
