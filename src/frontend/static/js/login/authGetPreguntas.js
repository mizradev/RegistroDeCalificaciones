(() => {
   let userData = [];
   const pregunta = $('#formPreguntas #pregunta');

   const getPreguntas = async () => {
      try {
         const res = await axios.get('/api/preguntas');

         // guradamos los datos
         userData = res.data;

         //  Creamos html
         pregunta.append(` <option value="${userData.id_preguntas}">${userData.pregunta_1}</option>`);
         pregunta.append(` <option value="${userData.id_preguntas}">${userData.pregunta_2}</option>`);
      } catch (error) {
         // Accedemos al message de la data del error y lo guardamos
         const message = error.response.data.message;

         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
         });
      }
   };

   // Mandamos a llamar la funcion
   getPreguntas();
})();
