const express = require('express');

const controller = require('../controllers/notifications');

const router = express.Router();

router.post('/notif', controller.createNotif);
router.get('/notif/:id_user', controller.getNotifsOfUser);
router.put('/notif/:id', controller.setNotifOld);

module.exports = router;