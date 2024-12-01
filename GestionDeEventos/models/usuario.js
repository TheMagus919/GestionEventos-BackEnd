const connection = require('../config/db');

const Usuario = {
    registrarUsuario: function(nombre, apellido, email, password, domicilio,  rol,  callback) {
        const sql = 'INSERT INTO usuarios (nombre, apellido, email, password, domicilio,  rol) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(sql, [nombre, apellido, email, password, domicilio,  rol], callback);
    },
    loginUsuario: function(email, password, callback) {
        const sql = 'SELECT * FROM usuarios WHERE email=? AND password=?';
        connection.query(sql, [email, password], callback);
    }
};

module.exports = Usuario;