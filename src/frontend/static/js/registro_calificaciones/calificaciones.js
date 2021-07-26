$(() => {

    const obtenerAlumnos = async () => {
        return axios.get('/api/v1/calificaciones/alumnos').then( res => console.log(res));
    }

    obtenerAlumnos();

    /* $('#notas_alumnos').DataTable({
        columns: [
            
        ]
    }); */

    console.log('Funciona');
    //$('#myTable').DataTable();

});