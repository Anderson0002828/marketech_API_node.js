const express = require('express');
const { createUser, getUserByEmail } = require('../controllers/user.controller');

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/register', createUser);

// Ruta para obtener los datos de un usuario por su email
router.get('/profile', getUserByEmail);

module.exports = router;