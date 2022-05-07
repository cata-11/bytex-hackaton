const express = require('express');

const controller = require('../controllers/events');

const router = express.Router();

router.post('/events', controller.createEvent);
router.get('/events', controller.findAll);
router.get('/events/:name', controller.findByName);

module.exports = router;