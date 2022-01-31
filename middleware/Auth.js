//Esta funcion verifica si el usuario inició sesión o no

const config = require("config")
const jwt = require("jsonwebtoken")

function auth(req, res, next) {
  const token = req.header("x-auth-token")

  // Busca al token, en caso de que no lo encuentre, arrojará arror 400
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" })
  }

  try {
    // Verifica el token en el archivo config
    const decoded = jwt.verify(token, config.get("jwtsecret"))
    req.user = decoded
    next()
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" })
  }
}

module.exports = auth
