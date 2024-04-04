const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/start', taskController.startService);
router.post('/send', taskController.send);
router.post('/stop', taskController.stopService);
router.get('/test', taskController.test);

module.exports = router;