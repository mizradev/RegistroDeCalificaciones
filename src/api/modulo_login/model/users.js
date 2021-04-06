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

// Obtener el usuario y rol por id
const getRol = (rId) => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT Id_usuario, user, correo, indicador_usuario, descripcion_rol FROM usuarios INNER JOIN rol ON rol.id_rol = usuarios.id_rol Where usuarios.id_usuario =  ?';
		const options = { sql: query, nestTables: true, values: [rId] };
		mysqlConnection.query(options, function (err, result) {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(result[0]);
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

// crear usuario prueba
const postUsuario = (id_usuario, id_rol, user, password, correo, token_password, token_expiracion, indicador_usuario, usr_registro) => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(`INSERT INTO usuarios (id_usuario, id_rol, user, password, correo, token_password, token_expiracion, indicador_usuario, usr_registro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id_usuario, id_rol, user, password, correo, token_password, token_expiracion, indicador_usuario, usr_registro], (err, usuario) => {
			if (err) {
				reject(err);
				console.log(err);
			} else {
				resolve(usuario[0]);
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

module.exports = {
	getEmail,
	getRol,
	getUsuario,
	postUsuario,
	postToken,
	postPassword,
	limpiarToken,
};
