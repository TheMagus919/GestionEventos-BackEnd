const Participacion = require('../models/participacion');
const participacionController = {
    crearParticipacion: function(req, res) {
        const { idUsuario, idEvento, confirmacion } = req.body;
        Participacion.crearParticipacion(idUsuario, idEvento, confirmacion, (err, resultado) => {
            if (err) {
                console.error('Error al crear Participacion: ' + err.stack);
                res.status(500).send('Error al crear Participacion');
                return;
            }
            console.log('Participacion creado correctamente');
            res.status(200).json(resultado);
        });
    },
    buscarParticipacion: function(req, res) {
        const { idParticipacion } = req.params;
        Participacion.buscarParticipacion(idParticipacion, (err, resultado) => {
            if (err) {
                console.error('Error al buscar Participacion: ' + err.stack);
                res.status(500).send('Error al buscar Participacion');
                return;
            }
            console.log('Participacion buscado correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    buscarTodosParticipaciones: function(req, res) {
        Participacion.buscarTodosParticipaciones((err, resultado) => {
            if (err) {
                console.error('Error al buscar Participaciones: ' + err.stack);
                res.status(500).send('Error al buscar Participaciones');
                return;
            }
            console.log('Participaciones encontrados correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    modificarParticipacion: function(req, res) {
        const { idAsistente, idEvento, confirmacion } = req.body;
        const { idParticipacion } = req.params;
        Participacion.modificarEvento(idAsistente, idEvento, confirmacion, idParticipacion, (err, resultado) => {
            if (err) {
                console.error('Error al modificar Participacion: ' + err.stack);
                res.status(500).send('Error al modificar Participacion');
                return;
            }
            console.log('Participacion modificado correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    borrarParticipacion: function(req, res) {
        const { idParticipacion} = req.params;
        Participacion.borrarParticipacion(idParticipacion, (err, resultado) => {
            if (err) {
                console.error('Error al borrar Participacion: ' + err.stack);
                res.status(500).send('Error al borrar Participacion');
                return;
            }
            console.log('Participacion borrado correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    confirmarAsistencia: function(req, res) {
        const { idParticipacion} = req.params;
        Participacion.confirmarAsistencia(idParticipacion, (err, resultado) => {
            if (err) {
                console.error('Error al confirmar Participacion: ' + err.stack);
                res.status(500).send('Error al confirmar Participacion');
                return;
            }
            console.log('Participacion confirmada correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    listarConfirmados: function(req, res) {
        const { idEvento} = req.params;
        Participacion.listarConfirmados(idEvento, (err, resultado) => {
            if (err) {
                console.error('Error al listar Confirmados: ' + err.stack);
                res.status(500).send('Error al listar Confirmadosn');
                return;
            }
            console.log('Se obtuvo la lista de Confirmados correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    descargarCertificado: function(req, res) {
        const { idParticipacion} = req.params;
        Participacion.descargarCertificado(idParticipacion, (err, resultado) => {
            if (err) {
                console.error('Error al descargar Certificado: ' + err.stack);
                res.status(500).send('Error al descargar Certificado');
                return;
            }
            console.log('Certificado descargado correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    verSiParticipa: function(req, res) {
        const { idEvento, idUsuario} = req.params;
        Participacion.verSiParticipa(idEvento, idUsuario, (err, resultado) => {
            if (err) {
                console.error('Error al ver si participa: ' + err.stack);
                res.status(500).send('Error al ver si participa.');
                return;
            }
            console.log('Participacion obtenida correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    eventosParticipados: function(req, res) {
        const { idUsuario} = req.params;
        Participacion.eventosParticipados(idUsuario, (err, resultado) => {
            if (err) {
                console.error('Error al obtener eventos en los que participo: ' + err.stack);
                res.status(500).send('Error al obtener eventos en los que participo.');
                return;
            }
            console.log('Eventos obtenidos correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
};

module.exports = participacionController;