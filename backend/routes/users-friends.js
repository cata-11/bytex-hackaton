const express = require('express');

const controller = require('../controllers/users-friends');

const router = express.Router();

router.post('/friends/add/:id_from/:id_to', controller.addFriendship);
router.get('/friends/:id_from', controller.findFriendsOf);

module.exports = router;