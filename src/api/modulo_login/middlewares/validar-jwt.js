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
		// obtengo uid del token y lo guardo en la request
		req.uid = uid;
		console.log(uid);

		// Leer el usuario que corresponde uid
		const usuario = await user.getRol(req.uid);
		if (!usuario) return res.status(401).json({ msg: 'El usuario no existe' });

		req.usuario = usuario;

		console.log(usuario);

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
