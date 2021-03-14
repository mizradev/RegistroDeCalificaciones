const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


// enviroments vars
require('dotenv').config();

// handlebars engine view
app.engine('handlebars',
    exphbs({
        defaultLayout: 'layout'
    })
);


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json({extended: true}));

//Routes
app.use('/api/v1/calificaciones', require('./src/modules/registro_calificaciones/routes'));

//Starting the server
app.listen(app.get('port'), () => console.log(`server on port http://localhost:${app.get('port')}`));