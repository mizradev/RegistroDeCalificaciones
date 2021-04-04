const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
   //validación de los campos
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      res.status(400).json(errors);
   }

   // Si es correcto pasa al siguiente middleware
   next();
};

module.exports = {
   validarCampos,
};
