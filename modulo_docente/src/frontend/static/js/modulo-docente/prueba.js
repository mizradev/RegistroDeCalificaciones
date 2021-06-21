(()=>{
  const userInfo = $('userInfo');

function init(){

  limpiar()


}

$('#formulario').on('submit',async function(e){
  e.preventDefault();
  hi= $('#hi').val()
  hf= $('#hf').val()
  fh= $('#fecha').val()
  min=$('#duracion').val()

  if(hi.length==0 || hf.length==0){
      alert('Error en la hora inicial o final');  
      return false
    } 
    if(hi==null || hf==null) {
      alert('Error en la hora inicial o final');  
      return false
    } 

    if(hi==null || hf==null) {
      alert('Error en la hora inicial o final');  
      return false
    } 
    
    if(fh==null || fh==null) {
      alert('Error en la fecha de habilitacion de la evaluacion');  
      return false
    } 

    var f= new Date();
    var d =  $('#fecha').val() + " 00:20:00"
    
    
    var fecha = new Date();            
  let anio = fecha.getFullYear()
  let mes = fecha.getMonth()+1
  let dia = fecha.getDate()

  if(dia < 10){
    dia='0'+dia
    }
    if(mes < 10){
    mes='0'+mes
    }
    var hoy=(anio + "-" + mes + "-" +dia + " 00:00:00");
    if (hoy>=d){
        alert("No se permite una fecha menor a la actual")
    }
    var fh="2021-04-26"
    if(min<10){
      alert('No se permiten valores a 10 en los minutos');  
      return false
    }
    var a= new Date(fh+' '+hi)
    var b= new Date(fh+' '+hf)
    var  diff = Math.abs(new Date(a) - new Date(b));
    var minutes = Math.floor((diff/1000)/60);
   
    if(minutes-min<1){
      alert('Tiene que colocar una hora final mayor a la duracion de la evaluacion');  
      return false
    }

    var clase=$('#clase').val();
      var seccion=$('#seccion').val();
      var titulo=$('#titulo').val();
      var valor=$('#valor').val();
       fecha = $('#fecha').val();
      var duracion=$('#duracion').val();
      var usr_registro="user"

      const data= {
      clase,
      seccion,
      titulo,
      valor,
      fecha,
      hi ,
      hf,
      duracion,usr_registro
      } 
      try {
        const res = (await axios.post('/api/v1/actividades/prueba',data)).data;
        alert(res.Status)
        limpiar()
      } catch (error) {
        console.log(error)
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














//evento teclear seccion
$('#fecha').on('change', function() {
  var f= new Date();
  var d =  $('#fecha').val() + " 00:20:00"
  
  
  const fecha = new Date();            
let anio = fecha.getFullYear()
let mes = fecha.getMonth()+1
let dia = fecha.getDate()

if(dia < 10){
  dia='0'+dia
  }
  if(mes < 10){
  mes='0'+mes
  }
  var hoy=(anio + "-" + mes + "-" +dia + " 00:00:00");
  if (hoy>=d){
      alert("No se permite una fecha menor a la actual")
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
  $('#clase').val("")
  $('#seccion').val("")
  $('#titulo').val("")
  $('#valor').val(10)
  $('#fecha').val("")
  $('#hi').val("")
  $('#hf').val("")
  $('#duracion').val("10")

 }

init()

})();