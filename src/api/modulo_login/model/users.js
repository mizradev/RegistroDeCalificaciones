const mysqlConnection = require('../../../config/db');

// Obtener usuario por correo
const getEmail = (pEmail) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(`SELECT * FROM usuarios WHERE correo = ?`, [pEmail], (err, row) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(row[0]);
			}
		});
	});
};

// Obtener usuario por id
const getUsuario = (id) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(`SELECT * FROM usuarios WHERE id_usuario = ?`, [id], (err, user) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(user[0]);
			}
		});
	});
};

// Insertar token_password a usuarios por email
const postToken = (token, id) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query('UPDATE usuarios SET token_password = ? WHERE usuarios.id_usuario = ?', [token, id], (err, row) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(row[0]);
			}
		});
	});
};

// Cambiar contraseña y limpiar el campo del token
const postPassword = (id, password) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query('UPDATE usuarios SET password = ? WHERE usuarios.id_usuario = ?', [id, password], (err, result) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(result[0]);
			}
		});
	});
};

// Limpiar el campo token_password después de cambiar la contraseña
const limpiarToken = (id, token_password) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query('UPDATE usuarios SET token_password = ? WHERE usuarios.id_usuario = ?', [id, token_password], (err, rows) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(rows[0]);
			}
		});
	});
};

// Insertar respuestas por usuario
const postRespuestas = (respuestas) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query('INSERT INTO respuestas_usuario SET ?', [respuestas], (err, resp) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(resp[0]);
			}
		});
	});
};

// Limpiamos el token de las preguntas
const tokenPreguntas = (id, token_preguntas) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query('UPDATE usuarios SET token_preguntas = ? WHERE usuarios.id_usuario = ?', [id, token_preguntas], (err, rows) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(rows[0]);
			}
		});
	});
};

// Mostrar las preguntas
const getPreguntas = () => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query('SELECT * FROM preguntas_usuario', (err, responses) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(responses[0]);
			}
		});
	});
};

module.exports = {
	getEmail,
	getUsuario,
	postToken,
	postPassword,
	limpiarToken,
	postRespuestas,
	tokenPreguntas,
	getPreguntas,
};
