const bcryptjs = require('bcryptjs');

const { getEmail } = require('../model/users');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async (req, res) => {
	//    encriptar
	//    const salt = bcryptjs.genSaltSync();
	//    const password1 = bcryptjs.hashSync(password, salt);
	//    console.log(password1);

	try {
		// Modelo de datos de usuario
		const usuario = await getEmail(req.body.correo);

		// Verificar si el correo existe
		if (usuario === undefined) {
			return res.status(400).json({ error: 'El usuario o la contraseña son invalidos - correo' });
		}

		// Si el usuario esta activo
		if (usuario.indicador_usuario !== 'activo') {
			return res.status(400).json({ error: 'El usuario o la contraseña son invalidos - false' });
		}

		// Verificar la contraseña
		const validarPassword = bcryptjs.compareSync(req.body.password, usuario.password);
		if (!validarPassword) {
			return res.status(400).json({ error: 'El usuario o la contraseña son invalidos - password' });
		}

		// Generar el token
		const token = await generarJWT(usuario.id_usuario);

		res.status(200).json({ message: 'Login ok', token: token });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Hable con el administrador' });
	}
	//    Fin try-catch
};

module.exports = {
	login,
};
