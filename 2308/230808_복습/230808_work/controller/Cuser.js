import { Postsignup, Postsignin, PostProfile, Patchprofile, Deleprofile } from '../model/User.js'

const main = (req, res) => {
    res.render('index');
}

const signUp_get = (req, res) => {
    res.render('signup');
}

const signUp_post = (req, res) => {
    Postsignup(req.body, () => {
        res.send({ result: true });
    });
}

const signIn_get = (req, res) => {
    res.render('signin');
}

const signIn_post = (req, res) => {
    Postsignin(req.body, (result) => {
        console.log('Cuser.js 받은 값', result);
        if(result.length > 0){
            res.send({result : true, data : result});
        }else{
            res.send({result : false, data : null});
        }
    });
}

const profile_post = (req, res) => {
    PostProfile(req.body, (result) => {
        if(result.length > 0){
            console.log('씨유저로 넘어온 값', result);
            res.render('profile', {datas : result[0]});
        }else{
            res.redirect('/user/signin');
        }

    });
}

const profile_patch = (req,res) => {
    Patchprofile(req.body, () => {
        res.send({result : true});
    });

}

const profile_dele = (req,res) => {
    Deleprofile(req.body, () => {
        res.send({result : true});
    });
}



export { main, signUp_get, signUp_post, signIn_get, signIn_post, profile_post, profile_patch, profile_dele }


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
