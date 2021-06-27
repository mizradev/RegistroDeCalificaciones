

 (()=>{
 
    

    //subida de la imagen a un servidor externo
    let ruta=[];
    let public=[];

  const imageview =document.getElementById('img-view');
 const imageUploader = document.getElementById('file');
 const progresbar = document.getElementById('progres-image');

 const claudinary_url ='https://api.cloudinary.com/v1_1/sistemadecalificaciones/image/upload'; //url de nuestro servidor externo de img
 const cloudinary_preset = 'qcb5f5uu';

 imageUploader.addEventListener('change', async (e)=>{
     const file = e.target.files[0];

    const formData = new FormData();
         formData.append('file', file);
        formData.append('upload_preset', cloudinary_preset);

     const res = await axios.post(claudinary_url, formData,{
           headers: {
               'Content-Type': 'multipart/form-data'
           }, onUploadProgress(e) {
          
            const progres = (e.loaded * 100)/e.total;
            progresbar.setAttribute('value',progres);
        }
      }); 
       console.log(res);
         imageview.src = res.data.secure_url;
         ruta = res.data.secure_url;
         public=res.data.public_id;


   });


   //Funcion para desabilitar campos al seleccionar los roles
   $( function() {
    $("#Tipo_riol").change( function() {

        if ($(this).val() === "2") {
            $("#facultad").prop("disabled", true);
      }else{  
        $("#facultad").prop("disabled", false);
      
    }if ($(this).val() === "3") {
      $("#facultad").prop("disabled", true);
    } if ($(this).val() === "1") {
      $("#especialidad").prop("disabled", true);
    }else {  
      $("#especialidad").prop("disabled", false);
    } if ($(this).val() === "3") {
      $("#especialidad").prop("disabled", true);
    }
    if ($(this).val() === "1") {
      $("#_numero_emp_est").prop("disabled", true);
    }
    else {  
      $("#_numero_emp_est").prop("disabled", false);
    }  if ($(this).val() === "1") {
      $("#puesto").prop("disabled", false);
    
    }if ($(this).val() === "2") {
      $("#puesto").prop("disabled", true);
    }

  });
});





  //INSERT A LA TABLA ADMINISTRADOR
 
//Insertar Datos Metodo Post
   
let res = [];
     $('#formulario').on('submit', async function(evento){
        evento.preventDefault();//Cancela que pagina se recargue

     const  numero_identidad = $('#identidad').val();
     const  nombre_persona = $('#nombre').val();
     const  edad_persona= $('#edad').val();
     const  genero_persona= $('#genero').val();
     const estado_civil = $('#estado_civil').val();
     const usr_registro= $('#user_registro').val();
     const _rol =$("#Tipo_riol").val();
     const fecha_nacimiento = $('#fecha_nacimiento').val();
     const correo_usuario = $('#email').val();
     const numero_telefono  = $('#numeroTel').val();
     const tipo_telefono = $('#tipo_telefono').val();
     const  descripcion_direccion  = $('#direccion').val();
     const foto = String(ruta);
     const puesto= $('#puesto').val();
     const facultad = $('#facultad').val();
     const  _especialidad = $('#especialidad').val();
     const  _numero_emp_est=  $('#_numero_emp_est').val()
     
     const nombre_usuario = $('#usuario').val();
     const password_usuario= $('#password').val();
     
     
   if(numero_identidad.length >=6 &&  numero_identidad.length<=20){
     const data ={
        numero_identidad,
        nombre_persona,
        edad_persona,
        genero_persona,
         estado_civil,
         fecha_nacimiento,
         correo_usuario,
         numero_telefono,
         descripcion_direccion ,
         foto,
         _especialidad, 
         _rol,
         usr_registro,
         nombre_usuario,
         tipo_telefono, 
         _numero_emp_est,
         puesto,
         facultad,
         password_usuario
        }
     try {
         const res= (await axios .post('/api/v1/usuario', data)).data;
         console.log(res)
         alert ('Datos ingresados corectamente')
        
     }catch(error) {
         console.log(error);
         //alert('Algo salio mal');
        
     }
    }else{
        alert('Algo salio mal');
    }
 });


 

})();
