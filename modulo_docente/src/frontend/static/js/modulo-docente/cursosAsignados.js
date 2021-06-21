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
         url: './api/v1/actividades/listarcursosasignados' +user,
         //data: {},
          crossOrigin: true,
         dataType: 'json',
         error: function(request, status, error){
             alert(request.responseText);
         },
         success: function(respuesta){
           var mydata=respuesta
           console.log(mydata[0].id_asignatura)
    table=  $('#listacursosasignados').DataTable({            
        destroy: true,
        data: mydata, 
        "columns":[
            {"data":"id_asignatura"},
            {"data":"asignatura"},
            {"data":"seccion"},
            {"data":"facultad"},
            {"data":"departamento"},
            {"data":"jornada"},

            {"render": function () {
                return '<button type="button" id="visualizar" class="btn btn-success editar"><i class="fas fa-eye"></i></button>';
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


  