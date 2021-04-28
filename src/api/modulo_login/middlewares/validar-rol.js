const { response } = require('express');

const esAdminRole = (req, res = response, next) => {
	const usuario = req.usuario;
	if (!usuario) {
		res.status(500).json({
			msg: 'Se quiere validar el rol sin validar el token primero',
		});
	}

	// const { uid } = req.uid;
	if (usuario.id_rol !== 1) {
		res.status(401).json({
			msg: `${usuario.user} no es administrador, no tienes los permisos suficientes para estar aquí...`,
		});
	}

	next();
};

// Middleware que permite que una ruta se ejecute por varios roles
const tieneRol = (...roles) => {
	return (req, res = response, next) => {
		const usuario = req.usuario;

		if (!usuario) {
			res.status(500).json({
				msg: 'Se quiere validar el rol sin validar el token primero',
			});
		}

		if (!roles.includes(usuario.id_rol)) {
			res.status(401).json({
				msg: `El servicio requiere uno de estos roles [ ${roles} ]`,
			});
		}
		next();
	};
};

module.exports = {
	esAdminRole,
	tieneRol,
};
