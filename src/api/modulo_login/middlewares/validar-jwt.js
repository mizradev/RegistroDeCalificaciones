const jwt = require('jsonwebtoken');
const { request, response } = require('express');
const user = require('../model/users');

const validarJWT = async (req = request, res = response, next) => {
	// leer los header desde postman
	const token = req.header('x-token');

	//    Si no viene el token
	if (!token) {
		return res.status(401).json({
			msg: 'No hay token en la petición',
		});
	}

	//    validar jwt
	try {
		const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

		// Leer el usuario que corresponde uid
		//   const usuario = await getId(uid);

		//   req.user = usuario;

		console.log(uid);

		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({
			msg: 'Token no valido',
		});
	}
};

module.exports = {
	validarJWT,
};
