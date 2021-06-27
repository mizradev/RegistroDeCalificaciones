const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

// enviroments vars
if(process.env.NODE_ENV === 'production'){
   require('dotenv').config({ path: '/var/.envRecaliProd' });
}else{
   require('dotenv').config();
}

// handlebars engine view
app.engine(
   '.hbs',
   exphbs({
      defaultLayout: 'main-layout',
      extname: '.hbs',
   })
);
app.set('view engine', '.hbs');
app.set('views', './src/frontend/views');
app.use(express.static(path.join(__dirname + '/src/frontend', 'static')));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json({ extended: true }));

//Routes pages
app.use('/', require('./src/frontend/routes'));

// Route api
app.use('/api/v1/auth', require('./src/api/modulo_login/routes'));

//Starting the server
app.listen(app.get('port'), () => console.log(`server on port http://localhost:${app.get('port')}`));

module.exports = app;
