//alert('Funciona! :) ');
(()=>{

    $('#formularioPrueba').on('submit', async function(evento){
        evento.preventDefault(); // cancela que la pagina se recargue

        const nombre = $('#nombre').val();
        const edad = Number($('#edad').val());
        const email = $('#email').val();
        console.log(typeof edad)
        if(nombre && edad >= 18 && edad <= 70 && email !== ''){
            const data = {
                nombre,
                edad,
                email
            }
            try {
                const res = (await axios.post('/api/v1/calificaciones/prueba', data)).data;
                console.log(res);
                alert('Todo OK! ');
            } catch (error) {
                console.log(error);
            }
        }else{
            alert('Hay algo malo!');
        }

    });

    $('.btnEditarPuntaje').on('click', function () {
        $('#modalEditarPuntaje').modal('show');
    })

})();