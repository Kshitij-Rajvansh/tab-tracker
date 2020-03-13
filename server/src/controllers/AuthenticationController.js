const {User} = require('../models');
const JWT = require('jsonwebtoken');
const config = require('../config/config');

// method to generate jwt token
function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;

  return JWT.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  // ===== Register Method =====
  async register (req, res) {

    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    }
    catch (err) {
      console.log(err.message);
      res.status(400).send({
        error: 'This email is already in use'
      })
    }
  },

  // ====== LOGIN Method =====
  async login (req, res) {

    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });

      if(!user){
        return res.status(403).send({
          error: 'The login information was incorrect NO USER'
        })
      }

      const isPasswordValid = await user.comparePassword(password);

      if(!isPasswordValid){
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    }
    catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}