const express = require('express');

const controller = require('../controllers/users');

const router = express.Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.post('/points', controller.addPoints);
router.get('/users/:username', controller.findByUsername);
router.get('/leaderboard', controller.getLeaderboard);
router.get('/leaderboard/:id_from', controller.getLeaderboardFriends);

module.exports = router;