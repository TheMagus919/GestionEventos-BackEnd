const connection = require('../config/db');

const Participacion = {
    crearParticipacion: function(idUsuario, idEvento, confirmacion, callback) {
        const sql = 'INSERT INTO participacion (idUsuario, idEvento, confirmacion) VALUES (?, ?, ?)';
        connection.query(sql, [idUsuario, idEvento, confirmacion], callback);
    },
    confirmarAsistencia: function(idParticipacion, callback) {
        const sql = 'UPDATE participacion p JOIN evento e ON p.idEvento = e.idEvento SET confirmacion = true WHERE p.idParticipacion = ? AND e.fecha <= CURDATE()';
        connection.query(sql, [idParticipacion], callback);
    },
    listarConfirmados: function(idEvento, callback) {
        const sql = 'SELECT u.nombre, u.apellido, p.idParticipacion FROM participacion p JOIN usuarios u ON p.idUsuario = u.idUsuario WHERE p.idEvento=? AND p.confirmacion = false';
        connection.query(sql, [idEvento], callback);
    },
    descargarCertificado: function(idParticipacion, callback) {
        const sql = 'SELECT u.nombre AS nombreAsistente, e.nombre AS nombreEvento, e.fecha FROM participacion p JOIN usuarios u ON u.idUsuario = p.idUsuario JOIN evento e ON e.idEvento = p.idEvento WHERE a.idUsuario = ? AND e.fecha <= CURDATE() AND p.confirmacion = true';
        connection.query(sql, [idParticipacion], callback);
    },
    verSiParticipa: function(idEvento, idUsuario, callback) {
        const sql = 'SELECT * FROM participacion WHERE idEvento=? AND idUsuario=?';
        connection.query(sql, [idEvento, idUsuario], callback);
    },
    eventosParticipados: function(idUsuario, callback) {
        const sql = 'SELECT * FROM participacion p JOIN evento e ON p.idEvento = e.idEvento WHERE p.idUsuario=? AND p.confirmacion = true';
        connection.query(sql, [idUsuario], callback);
    }
};

module.exports = Participacion;