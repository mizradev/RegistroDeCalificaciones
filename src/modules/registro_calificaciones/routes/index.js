const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../../config/db');
//controllers
const CalificacionesCtrl = require('../controllers/CalificacionesCtrl');

//const { check } = require('express-validator');

router.get('/', (req, res)=>{
    res.send('Hola mundo');
});


module.exports = router;