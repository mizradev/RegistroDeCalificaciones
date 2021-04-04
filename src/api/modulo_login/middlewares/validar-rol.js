const { response } = require('express');

const esAdminRole = (req, res = response, next) => {
	if (!req.usuario) {
		res.status(500).json({
			msg: 'Se quiere validar el role sin validar el token primero',
		});
	}

	const { uid } = req.uid;
	if (descripcion_rol !== 'admin') {
		res.status(401).json({
			msg: `${correo} no es un administrador`,
		});
	}

	next();
};

module.exports = {
	esAdminRole,
};
