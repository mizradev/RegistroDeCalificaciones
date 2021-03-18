const express = require('express');
const router = express.Router();

//controllers
const authCtrl = require('../../controllers/auth/AuthCtrl');

//const { check } = require('express-validator');

router.get('/login', authCtrl.pageAuth);

module.exports = router;