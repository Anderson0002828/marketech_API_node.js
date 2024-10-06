require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db.config');
const userRoutes = require('./routes/user.route');

// Inicializar la app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);

// Sincronizar con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch((err) => {
        console.error('Error al conectar con la base de datos:', err);
    });

// Escuchar en el puerto definido
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
