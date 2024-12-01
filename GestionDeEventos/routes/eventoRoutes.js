const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');
const { verificarToken, verificarRol} = require('../models/auth');

router.post('/crear', eventoController.crearEvento, verificarToken, verificarRol(['organizador']));
router.get('/buscarEvento/:idEvento', eventoController.buscarEvento, verificarToken, verificarRol(['organizador', 'asistente']));
router.get('/listarEventosPorFecha', eventoController.listarPorFechas, verificarToken, verificarRol(['organizador', 'asistente']));
router.get('/buscarTodos', eventoController.buscarTodosEventos, verificarToken, verificarRol(['organizador', 'asistente']));
router.put('/editar/:idEvento', eventoController.modificarEvento, verificarToken, verificarRol(['organizador']));
router.delete('/eliminar/:idEvento', eventoController.borrarEvento, verificarToken), verificarRol(['organizador']);

module.exports = router;