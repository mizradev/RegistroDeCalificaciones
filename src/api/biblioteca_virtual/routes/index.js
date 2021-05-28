const express = require('express');
const router = express.Router();

//controllers
const LibrosCtrl = require('../controllers/LibrosCtrl');
const { check } = require('express-validator');


 

router.get('/', LibrosCtrl.obtenerLibros);
router.get('/:id', LibrosCtrl.obtenerLibroPorId);
    
router.post('/',[
    check('ISBN','El isbn solo puede tener numeros, sin espacio de 10 digitos hasta 13').matches(/^\d{10,13}$/),   
    check('TITULO','Letras y espacios, pueden llevar acentos').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('EDICION','Solo se aceptan letras y numeros no caracteres especiales').matches(/^[a-zA-Z0-9-ZÀ-ÿ\s\_\-]{5,50}$/),
    check('DESCRIPCION_LIBRO','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,100}$/),
    check('IDIOMA','Solo se aceptan letras, no numeros ni caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('NOMBRE_EDITORIAL','Solo se aceptan letras no caracteres especiales ni numeros').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('NOMBRE_CATEGORIA','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('DESCRIPCION','Solo se aceptan letras').matches(/^[a-zA-ZÀ-ÿ\s]{5,75}$/),
    check('NOMBRE_AUTOR','Ingrese solo letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('NACIONALIDAD','Solo se aceptan letras no caracteres especiales, ni numeros').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('PREMIOS','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('RANKING','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-Z0-9\s\_\-\.]{5,40}$/)
], LibrosCtrl.agregarLibro);
router.put('/:id',[
    check('ISBN','El isbn solo puede tener numeros, sin espacio de 10 digitos hasta 13').matches(/^\d{10,13}$/),   
    check('TITULO','Letras y espacios, pueden llevar acentos').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('EDICION','Solo se aceptan letras y numeros no caracteres especiales').matches(/^[a-zA-Z0-9-ZÀ-ÿ\s\_\-]{5,50}$/),
    check('DESCRIPCION_LIBRO','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,100}$/),
    check('IDIOMA','Solo se aceptan letras, no numeros ni caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('NOMBRE_EDITORIAL','Solo se aceptan letras no caracteres especiales ni numeros').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('NOMBRE_CATEGORIA','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('DESCRIPCION','Solo se aceptan letras').matches(/^[a-zA-ZÀ-ÿ\s]{5,75}$/),
    check('NOMBRE_AUTOR','Ingrese solo letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('NACIONALIDAD','Solo se aceptan letras no caracteres especiales, ni numeros').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('PREMIOS','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-ZÀ-ÿ\s]{5,50}$/),
    check('RANKING','Solo se aceptan letras no caracteres especiales').matches(/^[a-zA-Z0-9\s\_\-\.]{5,40}$/)
], LibrosCtrl.actualizarLibro);
router.delete('/:id', LibrosCtrl.eliminarLibro);




module.exports = router;  