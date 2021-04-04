const jwt = require('jsonwebtoken');
const { request, response } = require('express');

const user = require('../model/users');

const validarJWT = async (req = request, res = response, next) => {
	// leer los header desde postman
	const token = req.header('x-token');

	//    Si no viene el token
	if (!token) {
		return res.status(401).json({
			error: 'No tiene autorización para realizar esta operación',
		});
	}

	//    validar jwt
	try {
		const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

		console.log(payload);

		// Si es correcto pasa al siguiente middleware
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({
			error: 'No tiene autorización',
		});
	}
};

module.exports = {
	validarJWT,
};
