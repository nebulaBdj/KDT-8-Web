const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/',controller.main);
router.get('/comments',controller.comments);// GET / 바꿀 목록 보여주기
router.get('/comment/:id',controller.comment);// GET / comment/:id

module.exports = router;