const Joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex( new RegExp('^[a-zA-Z0-9]{8,32}$') )
    };
    
    const {error} = Joi.validate(req.body, schema);

    if(error){
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email.'
          })
          break;
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
                    <br>
                    1. It must contain ONLY the following characters: lowercase, uppercase and numbers
                    <br>
                    2. It must be ATLEAST 8 characters long and not more than 32 characters.
            `
          })
          break;
        default:
          res.status(400).send({
            error: 'Invalid registeration information.'
          })
          break;
      }
    }
    else{
      next();
    }
  }
}