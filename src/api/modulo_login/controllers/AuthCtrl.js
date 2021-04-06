const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const { getEmail, postToken, getUsuario, postPassword, limpiarToken } = require('../model/users');
const { generarJWT, generarJwtPassword } = require('../helpers/generar-jwt');

const login = async (req, res) => {
	const correo = req.body.correo;
	const password = req.body.password;
	//    encriptar
	//    const salt = bcryptjs.genSaltSync();
	//    const password1 = bcryptjs.hashSync(password, salt);
	//    console.log(password1);

	try {
		// Modelo de datos de usuario
		const usuario = await getEmail(correo);

		// Verificar si el correo existe
		if (usuario === undefined) {
			return res.status(400).json({ error: 'El usuario o la contraseña son invalidos' });
		}

		// Si el usuario esta activo
		if (usuario.indicador_usuario !== 'activo') {
			return res.status(400).json({ error: `El usuario con este email: ${correo} no existe!!` });
		}

		// Verificar la contraseña
		const validarPassword = bcryptjs.compareSync(password, usuario.password);
		if (!validarPassword) {
			return res.status(400).json({ error: 'El usuario o la contraseña son invalidos' });
		}

		// Generar el token
		const token = await generarJWT(usuario.id_usuario, usuario.id_rol, usuario.indicador_usuario);

		res.status(200).json({ message: 'Inicio de sesión correcto', token: token });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Hable con el administrador' });
	}
	//    Fin try-catch
};

const recuperarPassword = async (req, res) => {
	const correo = req.body.correo;

	const message = 'Revise su correo electrónico que contiene el enlace para restablecer su contraseña';
	let verificarLink;
	let emailStatus = 'OK';

	try {
		// Modelo de datos de usuario
		const usuario = await getEmail(correo);

		// Verificar si el correo existe
		if (usuario === undefined) {
			return res.status(400).json({ error: 'El usuario es incorrecto' });
		}

		// Si el usuario esta activo
		if (usuario.indicador_usuario !== 'activo') {
			return res.status(400).json({ error: `El usuario con este email: ${correo} no existe!!` });
		}

		// // Generar el token
		const token = await generarJwtPassword(usuario.id_usuario, usuario.user);

		// Generar la url para actualizar la contraseña
		verificarLink = `http://${req.headers.host}/api/auth/recuperarContrasenia/${token}`;
		console.log(verificarLink);

		// Guardar el token en la Base de Datos
		await postToken(verificarLink, usuario.id_usuario);

		res.status(200).json({ message: message, status: emailStatus, url: verificarLink });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Este usuario no existe' });
	}
	//    Fin try-catch

	//  TODO: enviar email
};

const newPassword = async (req, res) => {
	// Validación para revisar que venga el token
	if (!req.headers.authorization) {
		return res.status(400).json({ message: 'No tiene Autorización' });
	}
	const password = req.body.password;
	const resetToken = req.headers.authorization.split(' ')[1];
	// console.log(resetToken);

	try {
		// Verificar el token del url y extraer el uid
		const { uid } = jwt.verify(resetToken, process.env.SECRETKEYRESETPASSWOR);
		console.log(uid);
		if (!uid) {
			return res.status(400).json({ message: 'El usuario no existe' });
		}

		// Verificar si uid del token existe en la BD
		const usuario = await getUsuario(uid);
		if (!usuario) {
			return res.status(400).json({ message: 'El usuario no existe' });
		}

		// Verificamos si existe el token en la BD
		if (!usuario.token_password) {
			return res.status(401).json({
				msg: 'No tienes autorización para estar aqui!!',
			});
		}

		// Verificar si el uid tiene estado act
		if (usuario.indicador_usuario !== 'activo') {
			return res.status(401).json({
				msg: 'El usuario no existe',
			});
		}

		// Encriptar la nueva contraseña
		const salt = bcryptjs.genSaltSync();
		const newPassword = bcryptjs.hashSync(password, salt);
		console.log(newPassword);

		// Guardar la nueva contraseña en la BD
		await postPassword(newPassword, usuario.id_usuario);

		// Limpiamos el token_password de laBD
		const token = null;
		await limpiarToken(token, usuario.id_usuario);

		res.status(200).json({ message: 'Contraseña restablecida correctamente' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Hable con el administrador' });
	}
	//    Fin try-catch
};

module.exports = {
	login,
	recuperarPassword,
	newPassword,
};
