const connection = require('../config/db');

const Evento = {
    crearEvento: function(nombre, fecha, ubicacion, descripcion, callback) {
        const sql = 'INSERT INTO evento (nombre, fecha, ubicacion, descripcion) VALUES (?, ?, ?, ?)';
        connection.query(sql, [nombre, fecha, ubicacion, descripcion], callback);
    },
    buscarEvento: function(idEvento, callback) {
        const sql = 'SELECT * FROM evento WHERE idEvento=?';
        connection.query(sql, [idEvento], callback);
    },
    buscarTodosEventos: function(callback) {
        const sql = 'SELECT * FROM evento';
        connection.query(sql, callback);
    },
    modificarEvento: function(nombre, fecha, ubicacion, descripcion, idEvento, callback) {
        const sql = 'UPDATE evento SET nombre=?, fecha=?, ubicacion=?, descripcion=? WHERE idEvento=?';
        connection.query(sql, [nombre, fecha, ubicacion, descripcion, idEvento], callback);
    },
    borrarEvento: function(idEvento, callback) {
        const sql = 'DELETE FROM evento WHERE idEvento=?';
        connection.query(sql, [idEvento], callback);
    },
    listarPorFechas: function(callback) {
        const sql = 'SELECT * FROM evento WHERE fecha > CURDATE() ORDER BY fecha';
        connection.query(sql, callback);
    }
};

module.exports = Evento;