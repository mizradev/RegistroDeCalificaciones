// //alert ('Valilos');
// (()=>{

//    // $('#formulario').on('submit', funtion(evento){ //e de evento
//      //  evento.preventDefault();//Cancela que se recargue la pagina

//     //} );
// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const identidad = $('#identidad').val();
// const nombre = $('#nombre').val();
// const apellido = $('#apellido').val();




// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
//    identidad:/^[0000]+-[0000]+-[00000]{8,15}+$/,
//    name:/^[A]{10}+$/,
//    password: /^.{4,12}$/, // 4 a 12 digitos.
//    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//    usuario: /^[a-zA-ZÀ-ÿ0-9\_\-\s]{4,50}$/, // Letras y espacios, pueden llevar acentos
// };

// const campos = {
//    identidad: false,
//    name:false,
//    password: false,
//    correo: false,
//    usuario: false,
// };

// const validarFormulario = (e) => {
//    switch (e.target.name) {
//       case 'identidad':
//          validarCampo(expresiones.password, e.target, 'identidad');
//          break;
//          case 'name':
//          validarCampo(expresiones.password, e.target, 'name');
//          break;
//       case 'password':
//          validarCampo(expresiones.password, e.target, 'password');
//          break;
//       case 'correo':
//          validarCampo(expresiones.correo, e.target, 'correo');
//          break;
//       case 'usuario':
//          validarCampo(expresiones.usuario, e.target, 'usuario');
//          break;
//    }
// };

// const validarCampo = (expresion, input, campo) => {
//    if (expresion.test(input.value)) {
//       document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
//       document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
//       document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
//       campos[campo] = true;
//    } else {
//       document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
//       document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
//       document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
//       campos[campo] = false;
//    }
// };

// inputs.forEach((input) => {
//    input.addEventListener('keyup', validarFormulario);
//    input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
//    e.preventDefault();

//    const terminos = document.getElementById('terminos');
//    if ( campos.name &&campos.identidad && campos.usuario && campos.password && campos.correo && terminos.checked) {
//       formulario.reset();

//       document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
//       setTimeout(() => {
//          document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
//       }, 5000);
//    } else {
//       document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
//    }
// });


// })();
