exports.pageAuth = (req, res) => {
   res.render('auth/login', {
      nombrePagina: 'login Sistema',
      pageAuthLogin: true,
      login: true,
      layout: false,
   });
};

exports.home = (req, res) => {
   if (true)
      return res.render('blank', {
         nombrePagina: 'Home',
      });
};

exports.pantalla_inicio = (req, res) => {
   if (true)
      return res.render('auth/index', {
         nombrePagina: 'Inicio',
         pageAuthLogin: true,
         layout: false,
      });
};

exports.recuperacion = (req, res) => {
   return res.render('auth/recuperacion', {
      nombrePagina: 'Recuperacion',
      pageAuthLogin: true,
      authRecuperacion: true,
      layout: false,
   });
};

exports.newPassword = (req, res) => {
<<<<<<< HEAD
    return res.render('auth/new_password',{
        nombrePagina: 'Auth - New Password',
        pageAuthLogin: true,
        layout: false
    })
}

// exports.pantalla_inicio = (req, res) => {
//     res.render('modulos/registro-calificaciones/home', {
//         nombrePagina: 'Calificaciones'
//     })
// }
=======
   return res.render('auth/new_password', {
      nombrePagina: 'New Password',
      pageAuthLogin: true,
      new_password: true,
      layout: false,
   });
};
exports.correo = (req, res) => {
   return res.render('auth/correo', {
      nombrePagina: 'Recuperacion por Correo',
      pageAuthLogin: true,
      recuperacionCorreo: true,
      layout: false,
   });
};
exports.preguntas = (req, res) => {
   return res.render('auth/preguntas', {
      nombrePagina: 'Recuperacion por Preguntas',
      pageAuthLogin: true,
      recuperacionPreguntas: true,
      layout: false,
   });
};

exports.respuestas = (req, res) => {
   return res.render('auth/respuestas', {
      nombrePagina: 'Ingresar respuestas',
      pageAuthLogin: true,
      ingresarRespuestas: true,
      layout: false,
   });
};
>>>>>>> origin/staging
