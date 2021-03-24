exports.pantalla_nuevoMjs = (req, res) => {
    res.render('modulos/modulo-ticket/nuevoMjs', {
        nombrePagina: 'nuevo_mensaje',
        registroCalificaciones: true
    })
}

exports.pantalla_ticket= (req, res) => {
    res.render('modulos/modulo-ticket/mensaje', {
        nombrePagina: 'mensajes',
        registroCalificaciones: true
    })
}