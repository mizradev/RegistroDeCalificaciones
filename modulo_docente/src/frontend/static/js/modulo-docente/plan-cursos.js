(()=>{
    const userInfo = $('userInfo');
function init(){
    limpiar()
    console.log("oks")
   listar()
}

$('#formulario').on('submit',function(e){
    e.preventDefault();
    
i=$("#actividad").val()
                   
if(i==null){
   
    alert("Seleccione una actividad")
    return false
}

    
i=$("#ft").val()
                   
if(i==null){
   
    alert("verifique una forma de trabajo")
    return false
}


i=$("#des_pc").val()                   
if(i.length<5){
    alert("La descripcion es muy corta")
    return false
}

var f= new Date("2021-01-01");
var g= new Date("2021-12-31");
var d =  new Date($('#fi').val())
var s =  new Date($('#ff').val())

console.log(f)

if(f>d || d>g){
    alert("Elija una fecha de este año para la fecha incial" )
    return false

}
 
if(f>s || s>g){
    alert("Elija una fecha de este año para la fecha final" )
    return false

}

if(s<d){
    alert("La fecha final no puede ser menor a la fecha inicial" )
    return false

}
      alert('Todo Bieen');  

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




//evento teclear seccion
$('#ff').on('change', function() {
    var d =  new Date($('#fi').val())
var s =  new Date($('#ff').val())
if(s<d){
    alert("La fecha final no puede ser menor a la fecha inicial" )
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
    console.log(hoy)
    $('#actividad option[value="0"]').prop("selected", true);
    $("#des_pc").val("");
    $("#duracion").val(1);
    $("#fi").val(hoy);
    $("#ff").val(hoy);
    $("#puntaje").val(10);
    $('#actividad option[value="1"]').prop("selected", true);


  }

 async function  listar (){
    var user="1"
    var table
//    console.log("ok")
  //  var mydata = [];
    //mydata=get('/api/v1/actividades/listarcursos/'+user);


    $.ajax({
         async: true,
         type: "get",
         url: './api/v1/actividades/listarcursos/'+user,
         //data: {},
          crossOrigin: true,
         dataType: 'json',
         error: function(request, status, error){
             alert(request.responseText);
         },
         success: function(respuesta){
           var mydata=respuesta
           console.log(mydata[0].id_asignatura)
    table=  $('#tbllistado').DataTable({            
        destroy: true,
        data: mydata, 
        "columns":[
            {"data":"id_asignatura"},
            {"data":"nombre_asignatura"},
            {"data":"seccion"},
            {"render": function () {
                return '<button type="button" id="acceder" class="btn btn-primary acceder"><span class="hidden-xs"> ACCEDER</span></button>';
            }},
        ],
        "columnDefs":[{
            "targets":[2],
            render(v){
                return Number(v).toFixed(2)
            }
        }]
    });

    
         }
         
    })

   
  }


  $("#tbllistado").on("click",".acceder", function(event){
    var tableInt = $("#tbllistado").DataTable();
    var datos = tableInt.row( $(this).closest('tr') ).data();
    //console.log(datos);
    window.location="./plan-curso?id="+datos['id_asignatura']+"&nc="+datos['nombre_asignatura'];
   
    //$("#nombre").val(datos['nombre']);
    //$("#email").val(datos['email']);
    //$('#tipo_usuario option[value="'+datos['tipo_usuario']+'"]').prop("selected", true);

   // $('.nav-tabs a[href="#menu1"]').tab('show');
});

  init()
})();