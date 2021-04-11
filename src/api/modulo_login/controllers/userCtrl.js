const bcryptjs = require('bcryptjs');

// importando las funciones del modelo usuarios
const users = require('../model/users');

const user = async (req, res) => {
	const { id } = req.params;

	try {
		// Modelo de datos para obtener el usuario por id
		const userss = await users.getUsuario(id);

		res.status(200).json(userss);

		if (!userss) {
			return res.status(400).json({ msg: 'No existe usuario' });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Hable con el administrador' });
	}
	//    Fin try-catch
};

const userPost = async (req, res) => {
	const id_rol = req.body.id_rol;
	const user = req.body.user;
	// const password = req.body.password;
	const correo = req.body.correo;
	const token_password = req.body.token_password;
	const token_expiracion = req.body.token_expiracion;
	const indicador_usuario = req.body.indicador_usuario;
	const usr_registro = req.body.usr_registro;
	// const fecha_registro = req.body.fecha_registro;

	try {
		const salt = bcryptjs.genSaltSync();
		const password = bcryptjs.hashSync(req.body.password, salt);

		const usuario = await users.postUsuario(id_rol, user, password, correo, token_password, token_expiracion, indicador_usuario, usr_registro);

		if (!usuario) {
			return res.status(400).json({ message: 'No se pudo crear el usuario' });
		}

		res.status(200).json({ message: 'Usuario creado', usuario });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Hable con el administrador' });
	}
};

module.exports = {
	user,
	userPost,
};
