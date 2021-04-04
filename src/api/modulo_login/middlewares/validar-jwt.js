const jwt = require('jsonwebtoken');
const { request, response } = require('express');

const user = require('../model/users');

const validarJWT = async (req = request, res = response, next) => {
	// leer los header desde header método (Bearer)
	const xToken = req.get('x-token');
	let token = '';

	// si existe token y el Bearer desde el header viene en minúsculas
	if (xToken && xToken.toLowerCase().startsWith('bearer')) {
		//extraemos el parámetro bearer del token
		token = xToken.substring(7);
	}

	if (!token) return res.status(401).json({ msg: 'No tiene autorización' });

	try {
		// // Obtenemos el uid del payload
		const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
		// console.log(uid);

		if (!uid) return res.status(401).json({ msg: 'El usuario no existe' });

		// Guardamos el uid en los request
		req.uid = uid;

		// Obtenemos la información del usuario autenticado a partir del req.uid
		const usuario = await user.getRol(req.uid);

		// Guardamos la informacion del usuario en el request
		req.usuario = usuario;

		// console.log(usuario);

		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({
			msg: 'No esta autenticado',
		});
	}
};

module.exports = {
	validarJWT,
};
