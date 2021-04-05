const jwt = require('jsonwebtoken');

const authToken = function (req, res, next) {
	if (req.path != '/api/auth/login') {
		if (req.headers.authorization) {
			let token = req.headers.authorization.split(' ')[1];

			jwt.verify(token, process.env.SECRETORPRIVATEKEY, function (error, decoded) {
				if (error) return res.status(401).send({ message: 'No tienes los permisos suficientes para estar aquí...', error });

				if (decoded.estado !== 'activo') return res.status(401).send({ message: 'No existe este usuario', error });
				next();
				if (req.method != 'GET') {
					// console.log(decode.rol);
					if (decoded.rol === 9) next();
					else res.status(401).send({ message: 'No tienes los permisos suficientes para estar aquí... rol' });
				} else {
					next();
				}
			});
		} else res.status(401).send({ message: 'No tienes los permisos suficientes para estar aquí...' });
	} else next();
};

module.exports = {
	authToken,
};
