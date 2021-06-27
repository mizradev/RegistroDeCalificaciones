
// exports.pantalla_administrador = (req, res) => {
//     res.render('modulos/Usuario/Administrador', {
//         nombrePagina: 'Administrador',
//         registroUsuario: true
//     })
// }
 exports.pantalla_usuarioperfil = (req, res) => {
    res.render('modulos/Usuario/usuario', {
         nombrePagina: 'usuarioferfil',
        usuarioperfil: true
     })
 }

 exports.pantalla_datospersonas = (req, res) => {
    res.render('modulos/Usuario/Datospersona', {
         nombrePagina: 'Datospersonas',
        Datospersonas: true
     })
 }
// exports.pantalla_Estudiantesinfor = (req, res) => {
//     res.render('modulos/Usuario/estudiantesinfor', {
//         nombrePagina: 'informacionG',
//         usuarioperfil: true
//     })
// }
 exports.pantalla_home = (req, res) => {
     res.render('modulos/Usuario/home', {
         nombrePagina: 'home',
         home: true
     })
 }

exports.pantalla_agregarusuario = (req, res) => {
    res.render('modulos/Usuario/aggusuario', {
        nombrePagina: 'agregarusuario',
        agregarusuario: true
    })
}
 
// exports.validaciones=(req, res) =>{
//           res.render('static/js/Usuario/Validaciones'),{
// nombrePagina: 'Validaciones',
//          validacionesUsuario: true
//    }
//   }
