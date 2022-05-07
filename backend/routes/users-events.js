const express = require('express');

const controller = require('../controllers/users-events');

const router = express.Router();

router.post('/uevent/add/:user_id/:event_id', controller.addUserToEvent);
router.get('/uevent/event/:event_id', controller.findAllForEvent); // gets all the users for an event_id
router.get('/uevent/user/:user_id', controller.findAllForUser); // gets all the events for an user_id

module.exports = router;