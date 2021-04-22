const container = document.getElementById('container');
const signIn = document.getElementById('sign-in');
// const signUp = document.getElementById('sign-up');

setTimeout(() => {
   container.classList.add('sign-in');
}, 200);

const toggle = () => {
   container.classList.toggle('sign-in');
};

// signIn.addEventListener('click', toggle);

// vlidacion mensaje
function myFunction() {
   let x = document.getElementsByClassName('formulario__mensaje-activo');
   if (x.length >= 1) {
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo2');
   }
}
