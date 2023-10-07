const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

router.get('/todos', controller.get_todo);
router.post('/todos', controller.post_todo);
router.delete('/todo/:todoId', controller.del_todo);
router.patch('/todo/:todoId', controller.patch_todo);

module.exports = router;