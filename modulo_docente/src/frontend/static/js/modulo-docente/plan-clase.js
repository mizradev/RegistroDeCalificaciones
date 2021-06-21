(()=>{
    const userInfo = $('userInfo');
function init(){
    limpiar()
    listar()
}

$('#formulario').on('submit', async function(e){
    e.preventDefault();
    
i=$("#hora").val()
                   
if(i==null || i==0){
   
    alert("Seleccione una hora")
    return false
}

    
i=$("#parcial").val()
                   
if(i==null || i==0){
   
    alert("seleccione el parcial")
    return false
}


i=$("#tema").val()                   
if(i.length<4){
    alert("El tema es muy corto")
    return false
}

i=$("#duracion").val()
                   
if(i==null || i==0){
   
    alert("seleccione una duracion")
    return false
}


var f= new Date("2021-01-01");
var g= new Date("2021-12-31");
var d =  new Date($('#fecha').val())

if(f>d || d>g){
    alert("Elija una fecha de este año para la fecha " )
    return false

}
 
var nombre_actividad= $("#parcial").val();
var descripcion_actividad= $("#tema").val();
var duracion=$("#duracion").val();
var fecha_inicio=d;
var fecha_finalizacion=d;
var puntaje=0;
var forma_trabajo=$("#hora").val();
var id_calendario=1
var id_asistencia=1
var tipo=1
var usr_registro ="user"
var id=$("#id").val();
console.log(id)


if (id==0) {
    const data= {
        nombre_actividad,
        descripcion_actividad,
        duracion,
        fecha_inicio,
        fecha_finalizacion,
        puntaje,
        forma_trabajo,
        id_calendario,
        id_asistencia,
        tipo,
        usr_registro
        } 
        try {
            console.log("paso2")
          const res = (await axios.post('/api/v1/actividades/agregarActividades',data)).data;
          alert(res.Status)
          limpiar()
          listar ()
          $('#modal').modal('hide')
        } catch (error) {
          console.log(error)
        }
    
}else{
    var id_actividad=id
    var tipo_actividades=1
    const data= {
        id_actividad,
        id_calendario, 
        id_asistencia, 
        nombre_actividad, 
        descripcion_actividad, 
        duracion,
        fecha_inicio, 
        fecha_finalizacion, 
        puntaje, 
        forma_trabajo, 
        usr_registro, 
        tipo_actividades
        } 
        try {
          const res = (await axios.put('/api/v1/actividades/actualizarActividad/',data)).data;
          alert(res.Status)
          limpiar()
          listar ()
          $('#modal').modal('hide')
        } catch (error) {
          console.log(error)
        }
}



});

 //evento teclear codigo clase
 $('#clase').on('keypress', function(e) {
    var letra;
    var bandpn;
    letra =  e.which? e.which : e.keyCode//$('#usuario').val();

    bandpn=escribeSoloLetrasDir(letra);
    
    if  (bandpn==false){
        
        return false
       
    }
 });


 //evento teclear codigo clase
 $('#titulo').on('keypress', function(e) {
    var letra;
    var bandpn;
    letra =  e.which? e.which : e.keyCode//$('#usuario').val();

    bandpn=escribeSoloLetrasDir(letra);
    
    if  (bandpn==false){
        
        return false
       
    }
 });
 //evento teclear seccion
 $('#seccion').on('keypress', function(e) {
    var letra;
    var bandpn;
    letra =  e.which? e.which : e.keyCode//$('#usuario').val();

    bandpn=EscribeSolonumero(letra);
    
    if  (bandpn==false){
        
        return false
       
    }
 });



 $('#formulario_modal').on('submit',function(e){

    e.preventDefault();

    var d =$('#pregunta').val()
    if (d.length<4) {
      alert("La pregunta es muy corta")
        return false
    }


    alert("todo bien")

 });

 
 async function  listar (){
    var user="1"
    var table
    //console.log("ok")
  //  var mydata = [];
    //mydata=get('/api/v1/actividades/listarcursos/'+user);


    $.ajax({

         async: true,
         type: "get",
         url: './api/v1/actividades/listarclase/',
         //data: {},
          crossOrigin: true,
         dataType: 'json',
         error: function(request, status, error){
             alert(request.responseText);
         },
         success: function(respuesta){
           var mydata=respuesta
           console.log(mydata)
    var tabla=$('#tbllistado').DataTable({            
        destroy: true,
        data: mydata, 
        "columns":[ 
            {"data":"id_actividad"},
            {"data":"fecha_inicio"},
            {"data":"forma_trabajo"},
            {"data":"nombre_actividad"},
            {"data":"descripcion_actividad"},
            {"data":"duracion"},
            {"render": function () {
                return '<button type="button" id="editar" class="btn btn-success editar"><i class="fa fa-edit"></i></button> <button type="button" id="eliminar" class="btn btn-danger eliminar"><i class="fa fa-trash"></i></button>';
            }},
        ],
        "columnDefs":[{
            "targets":[2],
           
        }]
    });
   


    
         }

        
         
    })

   
  }


  $("#tbllistado").on("click",".editar", function(event){
    var tableInt = $("#tbllistado").DataTable();
    var datos = tableInt.row( $(this).closest('tr') ).data();
    $("#id").val((datos['id_actividad']));
    $('#hora option[value="'+datos['forma_trabajo']+'"]').prop("selected", true);
    $("#tema").val(datos['descripcion_actividad']);

    var d =  new Date(datos['fecha_inicio'])        
    document.querySelector("#fecha").value = formatear(d)
    

    $('#parcial option[value="'+datos['nombre_actividad']+'"]').prop("selected", true);
    
    $('#duracion option[value="'+datos['duracion']+'"]').prop("selected", true);

    $('#modal').modal('show')  

});

$("#tbllistado").on("click",".eliminar", async function(event){
    var tableInt = $("#tbllistado").DataTable();
    var datos = tableInt.row( $(this).closest('tr') ).data();
    //alert(datos['id_actividad'])
    var id =(datos['id_actividad'])
    var opcion = confirm("¿Desea Eliminar El Registro?");
    console.log(id)
    if (opcion == false) {
       return false;
	} 
    try {
        const res = (await axios.delete('/api/v1/actividades/eliminarActividades/'+id)).data;
        alert(res.Status)
        limpiar()
        listar ()
        $('#modal').modal('hide')
      } catch (error) {
        console.log(error)
      }
    
});

const formatear = f =>{
    const año = f.getFullYear();
    const mes = ("0" + (f.getMonth()+1)).substr(-2);
    const dia = ("0" + f.getDate()).substr(-2);
    return `${año}-${mes}-${dia}`
}
 














//evento cambiar 
$('#fecha').on('change', function() {
    
var f= new Date("2021-01-01");
var g= new Date("2021-12-31");
var d =  new Date($('#fecha').val())

if(f>d || d>g){
    alert("Elija una fecha de este año para la fecha " )
    return false

}
 });
 
  //Fin funcion validar caracteres repetidos
  function escribeSoloLetrasDir(cod){

    if ((cod>= 48 && cod <=57 )  || (cod>= 65 && cod <=90 ) || (cod>= 97 && cod <=122 ) || (cod==8) || (cod==32) || (cod==46) || (cod==44) || (cod==45) || (cod==241) || (cod==209) ){
        return true
    }else{
        return false
    }

  }

  
  function EscribeSolonumero(cod){

    if ((cod>= 48 && cod <=57 )  || (cod==8)){
        return true
    }else{
        return false
    }

  }
 
 function limpiar() { 
    var f= new Date();

    var hoy=(f.getDate() + "-" + (f.getMonth() +1) + "-" +f.getFullYear() + " ");
   
    $('#hora option[value="0"]').prop("selected", true);
    $('#parcial option[value="0"]').prop("selected", true);
    $("#tema").val("");
    $("#id").val(0);
    $("#fecha").val(f);
    $('#duracion option[value="0"]').prop("selected", true);

  }



  init()

})();