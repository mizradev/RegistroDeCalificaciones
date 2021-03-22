const express = require ('express');
const router = express.Router();

//controllers
const ticket = require('controllers/ticket');

//const { check } = require('express-validator');

router.get('/new/:id', ticket.mensajeNuevo);
router.get('/:id', ticket.verMensajes);
router.post('/', ticket.insertMensaje); //
router.put('/:id', ticket.mensajeLeido);//actualizar mensaje a leido
router.delete('/:id', ticket.eliminar_mensaje);//eliminar mensaje

module.exports = router;