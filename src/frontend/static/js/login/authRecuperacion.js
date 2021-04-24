(() => {
   // Extraemos el token del local estorage para comprobar que existe
   const validToken = localStorage.getItem('token');
   if (!validToken) {
      // boton recuperar contraseña por correo
      $('#recuperarPorCorreo').on('click', (e) => {
         e.preventDefault();
         url = '/auth/correo';
         $(location).attr('href', url);
      });

      // boton recuperar contraseña por preguntas
      $('#recuperarPorPreguntas').on('click', (e) => {
         e.preventDefault();
         url = '/auth/preguntas';
         $(location).attr('href', url);
      });
   } else {
      //   Redireccionamos si no existe el token
      const url = '/home';
      $(location).attr('href', url);
   }
})();
