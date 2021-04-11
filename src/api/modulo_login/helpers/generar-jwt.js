const jwt = require('jsonwebtoken');

const generarJWT = (uid, rol, estado) => {
	return new Promise((resolve, reject) => {
		const payload = { uid, rol, estado };

		//   Generar el token
		jwt.sign(
			payload,
			process.env.SECRETORPRIVATEKEY,
			{
				expiresIn: '2h',
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject('No se pudo generar el token');
				} else {
					resolve(token);
				}
			}
		);
	});
};

const generarJwtPassword = (uid, user, estado) => {
	return new Promise((resolve, reject) => {
		const payload = { uid, user, estado };

		//   Generar el token
		jwt.sign(
			payload,
			process.env.SECRETKEYRESETPASSWOR,
			{
				expiresIn: '30m',
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject('No se pudo generar el token');
				} else {
					resolve(token);
				}
			}
		);
	});
};

module.exports = {
	generarJWT,
	generarJwtPassword,
};
