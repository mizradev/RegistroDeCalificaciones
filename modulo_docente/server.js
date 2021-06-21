const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();


// enviroments vars
require('dotenv').config();

// handlebars engine view
app.engine('.hbs',
    exphbs({
        defaultLayout: 'main-layout',
        extname: '.hbs'
    })
);
app.set('view engine', '.hbs');
app.set('views', './src/frontend/views');
app.use(express.static(path.join(__dirname+'/src/frontend', 'static')));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json({extended: true}));

//Routes pages
app.use('/', require('./src/frontend/routes'));
// Route api
app.use('/api/v1/calificaciones', require('./src/api/registro_calificaciones/routes'));
app.use('/api/v1/docente', require('./src/api/docente/routes'));
app.use('/api/v1/asistencia', require('./src/api/asistencia/routes'));
app.use('/api/v1/actividades', require('./src/api/actividades/routes'));

//Starting the server
app.listen(app.get('port'), () => console.log(`server on port http://localhost:${app.get('port')}`));


module.exports = app;