const express = require('express');
const app = express();

// enviroments vars
require('dotenv').config();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json({extended: true}));

//Routes
app.use('/api/v1/libros', require('./src/modules/biblioteca_virtual/routes'));

//Starting the server
app.listen(app.get('port'), () => console.log(`server on port http://localhost:${app.get('port')}`));