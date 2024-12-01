const express = require('express');
const app = express();
const eventoRoutes = require('./routes/eventoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const participacionRoutes = require('./routes/participacionRoutes');
const connection = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:4200', 
    };
app.use(cors(corsOptions));

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

app.use('/evento', eventoRoutes);
app.use('/participacion', participacionRoutes);
app.use('/usuario', usuarioRoutes);

app.listen(port, () => {
console.log(`Servidor Express corriendo en http://localhost:${port}`);
});

module.exports = app;