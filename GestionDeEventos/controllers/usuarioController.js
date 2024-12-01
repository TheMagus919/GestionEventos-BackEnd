const jwt = require('jsonwebtoken');

const Usuario= require('../models/usuario');
const usuarioController = {
    registrarUsuario: function(req, res) {
        const { nombre, apellido, email, password, domicilio, rol } = req.body;
        Usuario.registrarUsuario(nombre, apellido, email, password, domicilio, rol, (err, resultado) => {
            if (err) {
                console.error('Error al crear Usuario: ' + err.stack);
                res.status(500).send('Error al crear Usuario');
                return;
            }
            console.log('Usuario registrado correctamente');
            res.status(200).json(resultado);
        });
    },
    loginUsuario: function(req, res) {
        const { email, password } = req.body;
        Usuario.loginUsuario(email, password, (err, resultado) => {
            if(err){
                console.error('Error al loguearse: ' + err.stack);
                res.status(500).send('Error al loguearse.');
                return;
            }
            if (email === resultado[0].email && password === resultado[0].password) {
                const token = jwt.sign({ rol:resultado[0].rol, id:resultado[0].idUsuario  }, 'clave_secreta', { expiresIn: '1h' });
                res.json({ message: 'Login exitoso', token });
              } else {
                res.status(401).json({ message: 'Credenciales incorrectas' });
              }
        });
    }
};

module.exports = usuarioController;