(() => {
   $('#formPreguntas').on('submit', async (e) => {
      e.preventDefault();

      const correo = $('#correo').val();
      const respuesta = $('#respuesta').val();

      if (correo.length >= 4 && respuesta.length >= 2) {
         datos = {
            correo,
            respuesta,
         };

         try {
            const res = (await axios.post('/api/auth/recuperarPorPreguntas', datos)).data;

            console.log(res);

            // Extraemos el token y lo guardamos en localstorage
            const { token } = res;
            localStorage.setItem('token-meiler', token);

            Swal.fire({
               icon: 'success',
               text: res.message,
            }).then((result) => {
               if (result.isConfirmed) {
                  // limpiamos el formulario
                  $('#formPreguntas')[0].reset();

                  // Redireccionar
                  const url = '/auth/new_password';
                  $(location).attr('href', url);
               }
            });
         } catch (error) {
            console.log(error.response.data);
            // Accedemos al message de la data del error y lo guardamos
            const message = error.response.data.message;

            Swal.fire({
               icon: 'error',
               title: 'Error',
               text: message,
            }).then((result) => {
               // limpiamos el formulario
               if (result.isConfirmed) {
                  $('#formPreguntas')[0].reset();
               }
            });
         }
      } else {
         //   Si el usuario i ngresa mal un campo
         Swal.fire({
            icon: 'error',
            title: 'Debes completar los campos correctamente',
            showConfirmButton: false,
            timer: 1500,
         });
      }
   });
})();
