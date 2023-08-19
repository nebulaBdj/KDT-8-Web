const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.index = (req, res) => {
    res.render('index');
};

exports.get_register = (req, res) => {
    res.render('register');
};

exports.get_login = (req, res) => {
    res.render('login');
};

//회원가입
exports.register = async (req, res)=>{
    try {
        const {userid, pw, name} = req.body;
        const hashPw = bcryptP(pw);
        const result = await User.create({
            userid,
            name,
            pw: hashPw,
        });
        if (result) {
            res.json({result: true})
        }
        
    } catch (error) {
        console.log(error);
    }
}

const bcryptP = (pw) => {
    return bcrypt.hashSync(pw, 10);
}  

exports.login = async (req, res) => {
    try {
        const {userid, pw} = req.body;
        const result = await User.findOne({
            where: {userid},
        });
        if(!result){
            res.json({result:false});
        } 
        
        if (result) {
            res.json({result:true});
            const compare = conpareBcryptP(pw, result.pw);
        }
    } catch (error) {
        
    }
}

const conpareBcryptP = (pw, dbpw) => {
    return bcrypt.compare(pw, dapw);
}
