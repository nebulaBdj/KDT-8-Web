const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
router.get('/register', controller.get_register);//주소가 같아도 메소드가 다르기때문에 따로임
router.get('/login', controller.get_login);
//로그인

//회원가입
router.post('/register', controller.register);
router.post('/login', controller.login);




module.exports = router;
