// importando las funciones del modelo usuarios
const users = require('../model/users');

const user = async (req, res) => {
	const { id } = req.params;

	try {
		// Modelo de datos para obtener el usuario por id
		const userss = await users.getUsuario(id);

		res.status(200).json(userss);

		if (!userss) {
			return res.status(400).json({ message: 'No existe usuario' });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Hable con el administrador' });
	}
	//    Fin try-catch
};

module.exports = {
	user,
};
