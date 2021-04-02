const mysqlConnection = require('../../../config/db');

// exports.getUser = async (req, res) => {
//    //    const { email, password, rol } = req.body;

//    const query = `Select * From usuarios`;

//    try {
//       const result = await mysqlConnection.query(query, []);
//       return res.status(200).json(result);
//    } catch (error) {
//       console.log(error);
//    }
// };

// module.exports = {
//    getUser: (callBack) => {
//       pool.query(`select correo, password, rol from usuarios`, [], (error, results, fields) => {
//          if (error) {
//             callBack(error);
//          }
//          return callBack(null, results);
//       });
//    },
// };
