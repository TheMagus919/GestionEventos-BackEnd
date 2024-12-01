const express = require('express');
const router = express.Router();
const participacionController = require('../controllers/participacionController');
const { verificarRol, verificarToken  } = require('../models/auth');

router.post('/crear', participacionController.crearParticipacion, verificarToken, verificarRol(['asistente']));
router.get('/listarConfirmados/:idEvento', participacionController.listarConfirmados, verificarToken, verificarRol(['organizador']));
router.get('/descargarCertificado/:idParticipacion', participacionController.descargarCertificado, verificarToken, verificarRol(['asistente']));
router.put('/confirmarAsistencia/:idParticipacion', participacionController.confirmarAsistencia, verificarToken, verificarRol(['organizador']));
router.get('/participa/:idEvento/:idUsuario', participacionController.verSiParticipa, verificarToken, verificarRol(['asistente']));
router.get('/eventosParticipados/:idUsuario', participacionController.eventosParticipados, verificarToken, verificarRol(['asistente']));

module.exports = router;