
( ()=>{ 
    const userInfo = $('userInfo');
    function init(){
        limpiar()
    }
    //guardar datos del formulario en la base de datos 

$('#FormularioTareas').on('submit', function(e) {
    e.preventDefault();

    const codClase = $('#codClase').val();
    const codSeccion = number ($('#codSeccion').val());
    const nomTarea = $('#nomTarea').val();
    const puntTarea = number ($('#puntTarea').val());
    const fechFin = $('#fechFin').val();
    const horFin = $('#horFin').val();
    const desTareas = $('#desTareas').val();

    if (codClase !=='' && 
        codSeccion !==''  && 
        nomTarea !==''  && 
        puntTarea !=='' && 
        fechFin !=='' && 
        horInicio !=='' && 
        desTareas.length <= 100 ) {
        alert('TODO ESTA BIEN')
    } else {
        alert('HAY ALGO MALO');

    }

    var codigoClase = $('#codigoClase').val();
    var codigoSeccion = number ($('#codigoSeccion').val());
    var nombreTarea = $('#nombreTarea').val();
    var puntajeTarea = number ($('#puntajeTarea').val());
    var fechaFin = $('#fechaFin').val();
    var horaFin = $('#horaFin').val();
    var descripTareas = $('#descripTareas').val();
    var archivoTareas = $('#archivoTareas').val();

    const data ={
        codigoClase,
        codigoSeccion,
        nombreTarea,
        puntajeTarea,
        fechaFin,
        horaFin,
        descripTareas,
        archivoTareas
    }
    try{
        const res =(await axios.post('/api/v1/actividades/tareas', data)).data;
        alert(res)
        limpiar()

    }catch(error){
        console.error(error);
    }
    
})

function limpiar() { 
    $('#codigoClase').val("")
    $('#codigoSeccion').val("")
    $('#nombreTarea').val("")
    $('#puntajeTarea').val("")
    $('#fechaFin').val("")
    $('#horaFin').val("")
    $('#descripTareas').val("")
    $('#archivoTareas').val("")

   }

init()

})();