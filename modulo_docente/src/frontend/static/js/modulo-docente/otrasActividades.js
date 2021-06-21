( ()=>{ 
    const userInfo = $('userInfo');
    function init(){
        limpiar()
    }
    //guardar datos del formulario en la base de datos 

$('#FormularioOtrasactividades').on('submit', function(e) {
    e.preventDefault();

    const codigoClaseOtro = $('#codigoClase').val();
    const codigoSeccionOtro = number ($('#codigoSeccion').val());
    const nombreOtraactividad = $('#nombreTarea').val();
    const descripForo = $('#descripTareas').val();

    if (codigoClaseOtro !=='' && 
       codigoSeccionOtro !==''  && 
       nombreOtraactividad !==''  && 
       descripForo!=='' ) {
        alert('TODO ESTA BIEN')
    } else {
        alert('HAY ALGO MALO');

    }

    var codigoClaseOtro = $('#codigoClase').val();
    var codigoSeccionOtro = number ($('#codigoSeccion').val());
    var nombreOtraactividad = $('#nombreTarea').val();
    var puntajeTareaOtro = number ($('#puntajeTarea').val());
    var fechaFinOtro = $('#fechaInicio').val();
    var descripForo = $('#descripTareas').val();
    var archivo = $('#archivo').val();

    const data ={
        codigoClaseOtro,
        codigoSeccionOtro,
        nombreOtraactividad,
        puntajeTareaOtro,
        fechaFinOtro,
        descripForo,
        archivo
    }
    try{
        const res =(await axios.post('/api/v1/actividades/otrasactividades', data)).data;
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
    $('#puntajeTarea').val(10)
    $('#fechaInicio').val("")
    $('#descripTareas').val("")
    $('#archivo').val("")

   }

init()

})();