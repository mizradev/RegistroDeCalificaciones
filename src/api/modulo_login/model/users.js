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

// Obtener el rol
// const getRol = (rEmail) => {
//    return new Promise((resolve, reject) => {
//       const query = 'SELECT descripcion_rol FROM usuarios INNER JOIN rol ON rol.id_rol = usuarios.id_rol Where usuarios.correo =  ?';
//       const options = { sql: query, nestTables: true, values: [rEmail] };
//       mysqlConnection.query(options, function (err, result) {
//          if (err) {
//             reject(err);
//             console.log(err);
//          } else {
//             resolve(result[0].descripcion_rol);
//          }
//       });
//    });
// };

// Obtener usuario
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
	//    getRol,
	getUsuario,
};
