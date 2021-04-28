(() => {
   // Extraemos el token del local estorage para comprobar que existe
   const validToken = localStorage.getItem('token');

   if (validToken) {
      // si doy click en icono salir Cierro la sesion en el navbar
      $('nav #sesion li #salir').on('click', (e) => {
         e.preventDefault();

         //  alert('hola');

         //   Limpiamos el token del localStorage para cerrar sesion
         localStorage.removeItem('token');

         url = '/auth/login';
         $(location).attr('href', url);
      });

      //  Mostramos el nombre del usuario en el navbar
      const getUser = () => {
         let userData;
         const user = $('nav #sesion li #user');

         //   Extraemos el payload del token, decodificandolo
         var base64Url = validToken.split('.')[1];
         var base64 = base64Url.replace('-', '+').replace('_', '/');
         userData = JSON.parse(window.atob(base64));

         //  Creamos y Mandamos el texto al navbar
         user.text(`Bienvenido ${userData.user}`);
      };
      //   llamamos la funcion
      getUser();

      //  Mostramos el nombre del usuario en el sidebar donde esta la foto
      const userName = () => {
         let userData;
         const user = $('aside .sidebar .info #userName');

         //   Extraemos el payload del token, decodificandolo
         var base64Url = validToken.split('.')[1];
         var base64 = base64Url.replace('-', '+').replace('_', '/');
         userData = JSON.parse(window.atob(base64));

         //  Creamos y Mandamos el texto al navbar
         user.text(`${userData.user}`);
      };
      //   llamamos la funcion
      userName();
   } else {
      //   Redireccionamos si no existe el token
      const url = '/auth/login';
      $(location).attr('href', url);
   }
})();
