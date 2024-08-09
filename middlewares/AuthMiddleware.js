const jwt = require('jsonwebtoken');
const Config = require('../config');
const axios = require('axios');

const AuthMiddleware = {};

AuthMiddleware.checkToken = async function (req, res, next) {
  let token = req.headers['authorization'];
  try {
    await axios.get(`${Config.AUTH_API_URL}validate-token`, {headers: {authorization: req.headers['authorization']}})
    token = token.replace('Bearer ', '')
    const decoded = await jwt.decode(token);
    res.locals.employee = decoded;
    next();

  } catch (error) {
    console.error(error)
    return res.status(401).json({ message: 'No se ha encontrado el token de autenticación' });
  }
};




module.exports = AuthMiddleware;