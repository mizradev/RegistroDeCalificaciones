(()=>{
    const userInfo = $('userInfo');
  function init(){
   listar()
  }
  
  
  async function  listar (){
    //var user="1"
    var table
  //    console.log("ok")
  //  var mydata = [];
    //mydata=get('/api/v1/actividades/listarcursos/'+user);
  
  
    $.ajax({
         async: true,
         type: "get",
         url: './api/v1/actividades/listadoAlumnos/',
         //data: {},
          crossOrigin: true,
         dataType: 'json',
         error: function(request, status, error){
             alert(request.responseText);
         },
         success: function(respuest){
           var mydata=respuest
           console.log(mydata[0].id_persona)
    table= $('#alumnosmatriculados').DataTable({            
        destroy: true,
        data: mydata, 
        "columns":[
            {"data":"id_persona"},
            {"data":"cuenta"},
            {"data":"nom_estudiante"},
            {"data":"correo"},
            {"render": function () {
              //return '<button type="button" id="acceder" class="btn btn-primary acceder"><span class="hidden-xs"> ACCEDER</span></button>';
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