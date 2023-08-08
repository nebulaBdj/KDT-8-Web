// import { getProfile, signup_get, signin_get } from "../model/User.js";

// const main = (req, res) => {
//     res.render('index');
// };

// const Profile = (req, res) => {
//     getProfile((result) => {
//         console.log('Cuser.js :', result);
//         res.render('profile', {data : result});
//     });
// };

// const Signup = (req, res) => {
//     console.log('회원가입');
//     signup_get(req.body, () => {
//         res.send({result : true})
//     });
//     // signup_get(req.body.userid, req.body.name, req.body.pw, (result) => {
//     //     res.send({name:req.body.name, userid:req.body.userid, pw:req.body.pw })
//     // })
// };
// const SignupLoding = (req, res) => {
//     res.render('signup')
// }


// const Singin = (req, res) => {
//     console.log('로그인');
//     signin_get(req.body.userid, req.body.pw, (result) => {
//         console.log(result);
//     })
// }

// export {main, Profile, Signup, SignupLoding, Singin}
