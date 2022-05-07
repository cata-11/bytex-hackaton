const express = require('express');

const controller = require('../controllers/users');

const router = express.Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);

module.exports = router;
