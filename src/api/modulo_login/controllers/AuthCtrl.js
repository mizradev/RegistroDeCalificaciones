// const { getUser } = require('../model/users');
const mysqlConnection = require('../../../config/db');
const { check } = require('express-validator');

const login = async (req, res) => {
   const email = req.body.correo;
   const password = req.body.password;

   //validar que ambos campos sean ingresados
   let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

   let pass = /^.{4,12}$/.test(password);

   if (!expReg) return res.status(400).json({ msg: 'Debes ingresar un correo valido' });

   // Validar la contraseña
   if (!pass) return res.status(400).json({ msg: 'Tu contraseña debe contener al menos 4 dígitos' });

   // Validar que ambos campos no estén vacíos
   if (!(email && password)) {
      return res.status(400).json({ message: 'Se requiere el correo y la contraseña' });
   }

   try {
      mysqlConnection.query(`SELECT * FROM usuarios WHERE correo = ? and password= ? `, [email, password], (error, results) => {
         if (error) {
            return res.status(500).json({
               ok: false,
               msg: error,
            });
         }

         //  si hay resultados
         if (results.length > 0) {
            console.log(results);
            return res.status(200).json({
               ok: true,
               results,
            });
         } else {
            res.status(404).json({ message: 'El correo o la contraseña es invalido' });
         }
      });
   } catch (error) {
      console.log(error);
   }
};

module.exports = {
   login,
};
