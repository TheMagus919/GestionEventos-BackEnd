const jwt = require('jsonwebtoken');

const SECRET_KEY =  process.env.SECRET_KEY;

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensaje: 'Token no válido.' });
    }
    req.usuario = decoded; 
    next();
  });
};

function verificarRol(rolesPermitidos) {
  return (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);

      if (!rolesPermitidos.includes(decoded.rol)) {
        return res.status(403).json({ mensaje: 'Acceso denegado' });
      }

      req.usuario = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ mensaje: 'Token inválido' });
    }
  };
}

module.exports = { verificarRol, verificarToken };
