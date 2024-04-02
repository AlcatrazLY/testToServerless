const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/start', taskController.startService);
router.post('/stop', taskController.stopService);

module.exports = router;