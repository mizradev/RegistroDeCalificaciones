const express = require ('express');
const router = express.Router();

//controllers
const ticketC = require ('../controller/ticket');

//const { check } = require('express-validator');

router.get('/new/:id', ticketC.mensajeNuevo);
router.get('/:id', ticketC.verMensajes);
router.post('/', ticketC.insertMensaje); //
router.put('/:id', ticketC.mensajeLeido);//actualizar mensaje a leido
router.delete('/:id', ticketC.eliminar_mensaje);//eliminar mensaje

module.exports = router;    