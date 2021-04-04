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
		const query = 'SELECT * FROM usuarios INNER JOIN rol ON rol.id_rol = usuarios.id_rol Where usuarios.id_usuario =  ?';
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

module.exports = {
	getEmail,
	getRol,
	getUsuario,
};
