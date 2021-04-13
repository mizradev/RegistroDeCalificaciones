exports.pantalla_inicio = (req, res) => {
    res.render('modulos/registro-calificaciones/home', {
        nombrePagina: 'Calificaciones',
        registroCalificaciones: true
    })
}

exports.pantalla_2 = (req, res) => {
    res.render('modulos/registro-calificaciones/pantalla2',{
        nombrePagina: 'Pantalla de Prueba',
        pantalla2: true,
    })
}