exports.pageAuth = (req, res) => {
    res.render('auth/login', {
        nombrePagina: 'login Sistema',
        claseDePantalla: 'login-page',
        layout: 'auth-layout'
    })
}

exports.pantalla_inicio = (req, res) => {
    res.render('modulos/registro-calificaciones/home', {
        nombrePagina: 'Calificaciones'
    })
}