(() => {
   // Obtenemos el token del localStorage
   const token = localStorage.getItem('token-meiler');

   //    validamos que el token exista
   if (token) {
      $('#formPassword').on('submit', async (e) => {
         e.preventDefault();

         const password = $('#password').val();
         const password2 = $('#password2').val();

         if (password.length >= 4 && password2.length >= 4) {
            // Guardamos el token en el headers para enviarlo por axios
            const headers = { Authorization: `${token}` };

            datos = {
               password,
            };

            try {
               const res = (await axios.put(`/api/auth/nuevaContrasenia`, datos, { headers })).data;

               console.log(res);

               Swal.fire({
                  icon: 'success',
                  text: res.message,
               }).then((result) => {
                  if (result.isConfirmed) {
                     // limpiamos el formulario
                     $('#formPassword')[0].reset();

                     // Redireccionar
                     const url = '/auth/login';
                     $(location).attr('href', url);

                     //   Limpiamos el token-meiler del localStorage
                     localStorage.removeItem('token-meiler');
                  }
               });
            } catch (error) {
               console.log(error);
               console.log(error.response.data);
               // Accedemos al message de la data del error y lo guardamos
               const message = error.response.data.message;

               Swal.fire({
                  icon: 'error',
                  title: message,
                  showConfirmButton: false,
                  timer: 1500,
               }).then((result) => {
                  // limpiamos el formulario
                  $('#formPassword')[0].reset();

                  // Redireccionar
                  const url = '/auth/login';
                  $(location).attr('href', url);
               });
            } //Fin tryCatch
         } else {
            //   Si el usuario ingresa mal un campo
            Swal.fire({
               icon: 'error',
               title: 'Debes completar los campos correctamente',
               showConfirmButton: false,
               timer: 1500,
            });
         } //Fin if para validar los campos
      });
   } else {
      //    Si no existe el token me redirige al login
      Swal.fire({
         icon: 'error',
         title: 'Noi tienes autorizacion para estar aqui',
         showConfirmButton: false,
         timer: 1500,
      }).then((result) => {
         // limpiamos el formulario
         $('#formPassword')[0].reset();

         // Redireccionar
         const url = '/auth/login';
         $(location).attr('href', url);
      });
   } //Fin if para token
})();