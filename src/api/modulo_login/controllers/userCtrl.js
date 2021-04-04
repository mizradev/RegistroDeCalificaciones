// const bcryptjs = require('bcryptjs');
// const { generarJWT } = require('../helpers/generar-jwt');

// importando las funciones del modelo usuarios
const users = require('../model/users');

const user = async (req, res) => {
	const { id } = req.params;

	// const uid = req.uid;

	try {
		// Modelo de datos para obtener el usuario por id
		const userss = await users.getUsuario(id);

		// Obtenemos usuario autenticado
		const verify = await req.usuario;

		if (!userss) {
			return res.status(400).json({ msg: 'No existe usuario' });
		}

		return res.status(200).json({ userss, verify });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Hable con el administrador' });
	}
	//    Fin try-catch
};

module.exports = {
	user,
};
