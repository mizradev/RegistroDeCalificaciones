const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { getUsuario, postRespuestas, tokenPreguntas, getPreguntas } = require('../model/users');

const preguntas = async (req, res) => {
   // Validación para revisar que venga el token
   if (!req.headers.authorization) {
      return res.status(400).json({ message: 'No tiene Autorización' });
   }

   const respuesta1 = req.body.respuesta1;
   const respuesta2 = req.body.respuesta2;

   // Encriptar la respuestas secretas
   const salt = bcryptjs.genSaltSync();
   const newRespuesta1 = bcryptjs.hashSync(respuesta1, salt);
   const newRespuesta2 = bcryptjs.hashSync(respuesta2, salt);

   const token = req.headers.authorization.split(' ')[1];

   try {
      // Verificar el token del url y extraer el uid
      const { uid, estado } = jwt.verify(token, process.env.SECRETKEYRESETPASSWOR);

      if (!uid) {
         return res.status(400).json({ message: 'El usuario no existe' });
      }

      // Verificar si uid del token existe en la BD
      const usuario = await getUsuario(uid);

      if (!usuario) {
         return res.status(400).json({ message: 'El usuario no existe' });
      }

      // Verificamos si existe el token en la BD
      if (!usuario.token_preguntas) {
         return res.status(401).json({
            message: 'No tienes autorización para estar aqui!!',
         });
      }
      // verificar que el token de la ruta sea igual al de la base de datos
      if (token !== usuario.token_preguntas) {
         return res.status(401).json({
            message: 'No tienes autorización para estar aqui!!',
         });
      }
      // Verificar si el uid tiene estado act
      if (estado !== 'activo') {
         return res.status(401).json({
            message: 'El usuario no existe',
         });
      }

      // Guardar las respuestas del usuario
      const respuestas = {
         id_usuario: uid,
         id_preguntas: 4,
         Respuesta_1: newRespuesta1,
         Respuesta_2: newRespuesta2,
         usr_registro: usuario.nombre_usuario,
         fecha_registro: new Date(),
      };

      await postRespuestas(respuestas);

      // // Limpiamos el token_preguntas de la BD
      const tokenPregunta = null;
      await tokenPreguntas(tokenPregunta, uid);

      res.status(201).json({ message: 'Preguntas guardadas exitosamente' });
   } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Hable con el administrador' });
   }
   //    Fin try-catch
};

const getAllPreguntas = async (req, res) => {
   try {
      // Modelo de datos para obtener el preguntas
      const preguntas = await getPreguntas();
      // console.log(preguntas);
      if (!preguntas) {
         return res.status(400).json({ message: 'No hay resultados' });
      }

      res.status(200).json(preguntas);
   } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Hable con el administrador' });
   }
};

module.exports = {
   preguntas,
   getAllPreguntas,
};
