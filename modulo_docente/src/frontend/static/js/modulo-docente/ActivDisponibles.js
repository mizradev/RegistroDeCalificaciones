(()=>{
  const userInfo = $('userInfo');
function init(){
 listar()
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
       url: './api/v1/actividades/obtenerActividades/',
       //data: {},
        crossOrigin: true,
       dataType: 'json',
       error: function(request, status, error){
           alert(request.responseText);
       },
       success: function(respuesta){
         var mydata=respuesta
         console.log(mydata[0].id_actividad)
  table=  $('#listaactividades').DataTable({            
      destroy: true,
      data: mydata, 
      "columns":[
          {"data":"id_actividad"},
          {"data":"fecha_inicio"},
          {"data":"nombre_actividad"},
          {"render": function () {
           ;
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


init()
})();