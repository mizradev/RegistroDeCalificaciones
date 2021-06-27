//Archivo validaciones.js----

(()=>{

    const identidad = document.getElementById("identidad")
     const nombre = document.getElementById("nombre")
     const email = document.getElementById("email")
     const numeroTel = document.getElementById("numeroTel")
     const edad = document.getElementById("edad")
     const direccion = document.getElementById("direccion")
     const password = document.getElementById("password")
     const usuario = document.getElementById("usuario")
     const puesto = document.getElementById("puesto")
     const formulario = document.getElementById("formulario")
     const parrafo = document.getElementById("warnings")
      
     formulario.addEventListener("submit", e=>{
     e.preventDefault()
      let warnings = ""
       let entrar =false
       let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      
       parrafo.innerHTML = ""
       if(nombre.value.length <6){
         warnings += `El nombre no es valido <br>`
         entrar = true
       }
    

  
       if(!regexEmail.test(email.value)){
         warnings += `El email no es valido <br>`
         entrar = true
       }

       if( !(/^\d{9}$/.test(numeroTel.value)) ) {
        warnings += ` Telefono debe contener 9 numero sin espacio, ni guiones <br>`
        entrar = true
        } 
        
        if (!( /^[0-9]{13}$/.test(identidad.value))) {
          warnings += ` Identidad debe contener 13 numeros sin espacio, ni guiones <br>`
          entrar = true
      }

      if (!( /^[0-9]{2}$/.test(edad.value))) {
        warnings += `La edad solo debe contener numeros <br>`
        entrar = true
      }
      
      if(direccion.value.length <15){
        warnings += `La direccion debe tener al menos 15 caracteres <br>`
        entrar = true
      }
     
      if(password.value.length <4){
        warnings += `La contraseña debe tener al menos 4 caracteres <br>`
        entrar = true
      }
    
    
      if(usuario.value.length <5){
        warnings += `Usuario no valido, minimo 5 y maximo 30<br>`
        entrar = true
      }

      if(puesto.value.length <5){
        warnings += `el puesto de contener al menos 5 caracteres<br>`
        entrar = true
      }


    if(entrar){
      parrafo.innerHTML = warnings
    }
    
     })

 
    })();





  



