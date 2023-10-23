import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const SECRET = 'secretkey'

const userinfo = {id:'hong',pw:'1234',name:'ghdrlfehd',age:27}

app.use(express.urlencoded({extended:true}));   
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req,res)=>{
    res.render('login');
})

app.post('/login', (req, res) => {
    try {
        const {id, pw} = req.body;
        const { id: uId, pw: uPw} = userinfo;
        if(id===uId && pw === uPw){
            //토큰 생성
            const token = jwt.sign({id}, SECRET);
            res.json({result:true, token});
        }else{
            res.json({result:false, message:'로그인 정보가 올바르지 않습니다.'})
        }
        
    } catch (error) {
        console.log(error);
    }
})

app.post('/token', (req, res) => {
    if(req.headers.authorization) {
        const token =req.headers.authorization.split(' ')
        try {
            const result = jwt.verify(token[1], SECRET);
            if(result.id === userinfo.id){
                res.json({ result: true, name: userinfo.name});
            }   ////여기서부터 다시         
        } catch (error) {
            console.log(error);
            res.json({result:false, message: '인증된 회원 아님'});
        }
    }else{
        res.redirect('/login');
    }
})

app.listen(8080);
