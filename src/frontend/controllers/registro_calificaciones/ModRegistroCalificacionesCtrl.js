exports.pantalla_inicio = (req, res) => {
    res.render('modulos/registro-calificaciones/home', {
        nombrePagina: 'Calificaciones',
        registroCalificaciones: true
    })
}
//exports.pantalla_inicio = (req, res) => {
  //  res.render('modulos/Usuario/Administrador', {
     //   nombrePagina: 'Administrador',
       // registroCalificaciones: true
    //})
//}