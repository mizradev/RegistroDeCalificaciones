const mysqlConnection = require('../../../config/db');
const bcryptjs = require('bcryptjs');

const login = async (req, res) => {
   const email = req.body.correo;
   const password = req.body.password;

   //    encriptar
   //    const salt = bcryptjs.genSaltSync();
   //    const password1 = bcryptjs.hashSync(password, salt);
   //    console.log(password1);

   //validación de los campos
   let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

   let pass = /^.{4,12}$/.test(password);

   if (!expReg) return res.status(400).json({ msg: 'Debes ingresar un correo valido' });

   //    Validar la contraseña
   if (!pass) return res.status(400).json({ msg: 'Tu contraseña debe contener al menos 4 dígitos' });

   // Validar que ambos campos no estén vacíos
   if (!(email && password)) {
      return res.status(400).json({ message: 'Se requiere el correo y la contraseña' });
   }

   try {
      //Consulta para obtener la contraseña encriptada
      mysqlConnection.query(`SELECT password FROM usuarios WHERE correo = ?`, [email], (err, pass) => {
         if (err) {
            return res.status(500).json({
               ok: false,
               msg: error,
            });
         }

         if (pass.length > 0) {
            //  obtengo la contraseña desde la base de datos
            const passw = pass[0].password;

            // Validar contraseña
            const validarPasswor = bcryptjs.compareSync(password, passw);
            if (!validarPasswor) return res.status(400).json({ msg: 'El correo o la contraseña son inválidos' });

            //  Segunda consulta para el login
            mysqlConnection.query(`SELECT * FROM usuarios WHERE correo = ? and password= ? `, [email, passw], (error, results) => {
               if (error) {
                  return res.status(500).json({
                     ok: false,
                     msg: error,
                  });
               }

               if (results.length > 0) {
                  // Consulta para ver si el usuario esta activo
                  mysqlConnection.query(`SELECT indicador_usuario, id_rol FROM usuarios WHERE correo = ? `, [email], (error, result) => {
                     if (error) {
                        return res.status(500).json({
                           ok: false,
                           msg: error,
                        });
                     } else {
                        // Si el usuario esta activo
                        if ('Activo' === result[0].indicador_usuario && result[0].id_rol === 9) {
                           res.status(200).json(results);
                        } else {
                           res.status(400).json({ message: 'Este usuario no existe' });
                        }
                     }
                  });
               } else {
                  res.status(400).json({ message: 'El correo o la contraseña son inválidos' });
               }
            });
            // Fin consulta login
         } else {
            res.status(400).json({ message: 'El correo o la contraseña son inválidos' });
         }
      });
      //   Fin consulta validar contraseña
   } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Hable con el administrador' });
   }
   //    Fin try-catch
};

module.exports = {
   login,
};
