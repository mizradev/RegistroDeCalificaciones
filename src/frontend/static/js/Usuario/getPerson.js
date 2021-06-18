// const { response } = require("express");
// const { body } = require("express-validator");

//Traer datos de personas

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
             url: './api/v1/usuario/SelectDatosPersona/'+user,
             //data: {},
              crossOrigin: true,
             dataType: 'json',
             error: function(request, status, error){
                 alert(request.responseText);
             },
             success: function(respuesta){
               var mydata=respuesta
               console.log(mydata[0].id_persona)
        table=  $('#listaDatospersonas').DataTable({            
            destroy: true,
            data: mydata, 
            "columns":[
                {"data":"id_persona"},
                 {"data":"nombre_persona"},
                 {"data":"nombre_rol"},
                 {"data":"nombre_usuario"},
                 {"data":"correo_usuario"},
                 {"data":"numero_telefono"},
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
    
    
      $("#listaDatospersonas").on("click",".acceder", function(event){
        var tableInt = $("#listaDatospersonas").DataTable();
        var datos = tableInt.row( $(this).closest('tr') ).data();
        //console.log(datos);
        window.location="./Datospersona?id="+datos['id_persona']+"&nc="+datos['nombre_persona'];
       
        //$("#nombre").val(datos['nombre']);
        //$("#email").val(datos['email']);
        //$('#tipo_usuario option[value="'+datos['tipo_usuario']+'"]').prop("selected", true);
    
       // $('.nav-tabs a[href="#menu1"]').tab('show');
    });
    
    init()
  

// 'use strict';
// let listar_datos = async() => {
//     let datos;
//     await axios({
//             method: 'get',
//             url: 'http://localhost:3000/api/v1/usuario',
//             responseType: 'json'
//         }).then(function(res) {
//             datos = res.data.datos;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });
//     return datos;
// };
 
//  'use strict';

//  const tbody = document.querySelector('#datos_persona');

//  let mostrar_datos = async() => {
//      let users= await listar_users();
//      tbody.innerHTML = '';
//      for (let i = 0; i < users.length; i++) {
//          let fila = tbody.insertRow();
//          fila.insertCell().innerHTML = users[i]['numero_identidad'];
//          fila.insertCell().innerHTML = users[i]['nombre_persona'];
//          fila.insertCell().innerHTML = users[i]['_rol'];
//          fila.insertCell().innerHTML = users[i]['nombre_usuario'];
//          fila.insertCell().innerHTML = users[i]['correo_usuario'];
//          fila.insertCell().innerHTML = users[i]['numero_telefono'];
        
//      }
//  };
//  mostrar_datos();


})();