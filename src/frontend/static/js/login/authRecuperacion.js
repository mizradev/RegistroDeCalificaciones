(() => {
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
})();
