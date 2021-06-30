const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const calificacionesCtrl = require('./src/frontend/controllers/registro_calificaciones/ModRegistroCalificacionesCtrl')
// enviroments vars
require('dotenv').config({path: '../../.env'});

// handlebars engine view
app.engine('.hbs',
    exphbs({
        defaultLayout: 'main-layout',
        extname: '.hbs'
    })
);
app.use(express.static(path.join(__dirname+'/src/frontend', 'static')));
app.set('view engine', '.hbs');
app.set('views', './src/frontend/views');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json({extended: true}));

//Routes pages
app.use('/', require('./src/frontend/routes'));
// Route api
app.use('/api/v1/calificaciones', require('./src/api/registro_calificaciones/routes'));

//Starting the server
app.listen(app.get('port'), () => console.log(`server on port http://localhost:${app.get('port')}`));


module.exports = app;