const Evento = require('../models/Evento');
const eventoController = {
    crearEvento: function(req, res) {
        const { nombre, fecha, ubicacion, descripcion } = req.body;
        Evento.crearEvento(nombre, fecha, ubicacion, descripcion, (err, resultado) => {
            if (err) {
                console.error('Error al crear Evento: ' + err.stack);
                res.status(500).send('Error al crear Evento');
                return;
            }
            console.log('Evento creado correctamente');
            res.status(200).json(resultado);
        });
    },
    buscarEvento: function(req, res) {
        const { idEvento } = req.params;
        Evento.buscarEvento(idEvento, (err, resultado) => {
            if (err) {
                console.error('Error al buscar Evento: ' + err.stack);
                res.status(500).send('Error al buscar Evento');
                return;
            }
            console.log('Evento buscado correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    buscarTodosEventos: function(req, res) {
        Evento.buscarTodosEventos((err, resultado) => {
            if (err) {
                console.error('Error al buscar Eventos: ' + err.stack);
                res.status(500).send('Error al buscar Eventos');
                return;
            }
            console.log('Eventos encontrados correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    modificarEvento: function(req, res) {
        const { nombre, fecha, ubicacion, descripcion } = req.body;
        const { idEvento } = req.params;
        Evento.modificarEvento(nombre, fecha, ubicacion, descripcion, idEvento, (err, resultado) => {
            if (err) {
                console.error('Error al modificar Evento: ' + err.stack);
                res.status(500).send('Error al modificar Evento');
                return;
            }
            console.log('Evento modificado correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    borrarEvento: function(req, res) {
        const { idEvento} = req.params;
        Evento.borrarEvento(idEvento, (err, resultado) => {
            if (err) {
                console.error('Error al borrar Evento: ' + err.stack);
                res.status(500).send('Error al borrar Evento');
                return;
            }
            console.log('Evento borrado correctamente', resultado);
            res.status(200).json(resultado);
        });
    },
    listarPorFechas: function(req, res) {
        Evento.listarPorFechas((err, resultado) => {
            if (err) {
                console.error('Error al listar Eventos por fecha: ' + err.stack);
                res.status(500).send('Error al listar Eventos por fecha');
                return;
            }
            console.log('Listado de eventos por fecha obtenidos correctamente', resultado);
            res.status(200).json(resultado);
        });
    }
};

module.exports = eventoController;