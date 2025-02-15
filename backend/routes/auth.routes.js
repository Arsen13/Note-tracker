const express = require('express');
const { signUp, getUser, login } = require('../controllers/auth.controller');
const { authenticateToken } = require('../utils/utilities');

const router = express.Router();

router.post('/create-account', signUp);
router.post('/login', login);
router.get('/get-user', authenticateToken, getUser);

module.exports = router;