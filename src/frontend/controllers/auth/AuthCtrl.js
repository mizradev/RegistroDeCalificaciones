exports.pageAuth = (req, res) => {
    res.render('auth/login', {
        nombrePagina: 'login Sistema',
        claseDePantalla: 'login-page',
        layout: 'auth-layout'
    })
}