import express from 'express';
import {main, signUp_post, signUp_get, signIn_get, signIn_post, profile_post, profile_patch, profile_dele} from '../controller/Cuser.js'
const router = express.Router();

router.get('/',main);

//회원가입
router.post('/user/signup', signUp_post);
router.get('/user/signup', signUp_get);

//로그인
router.get('/user/signin', signIn_get);
router.post('/user/signin', signIn_post);

//프로필 화면 띄우기
router.post('/user/profile', profile_post);

//프로필 수정
router.patch('/user/profile/edit', profile_patch);

//프로필 삭제
router.delete('/user/exit', profile_dele);


export { router }; 

// import express from 'express';
// import {main, Profile, Signup, SignupLoding, Singin} from '../controller/Cuser.js'
// const router = express.Router();

// router.get('/', main);


// router.get('/user/signup', SignupLoding)
// router.post('/user/signup', Signup)


// router.get('/user/signin', Singin)
// // router.post('/user/signin', Singin) 

// router.post('/user/profile', Profile);

// // router.update('/user/profile/edit', editpro);
// // router.delete('/user/profile/delete', Deletepro);


// export { router };

