import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const SECRET = 'secretkey'

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));   
app.use(express.json());


const userIfo ={ id : 'ehd', pw: '2345'};


app.get('/', (req, res) => {
    res.render('login');
})

app.post('/worklogin', (req, res) => {
    
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.pw);
    console.log(userIfo.id);
    console.log(userIfo.pw);

    // const databody = data;

    // console.log(databody);

    const que = req.body;
    console.log(que);

    if(req.body.id === userIfo.id && req.body.pw === userIfo.pw){
        const token = jwt.sign({que}, SECRET);
        console.log(token);
        res.send({result:true, token:token, id:req.body.id, pw:req.body.pw});
    }else{
        res.send({result:false, message: '로그인 실패'});
    }
})

app.get('/workpage', (req, res) => {
    res.render('index');
})

app.post('/workpage', (req, res) => {
    console.log('인덱스 페이지에 보낸 데이터', req.body.result);
    console.log('인덱스 페이지에 보낸 데이터', req.headers.authorization);
    console.log('인덱스 페이지에 보낸 데이터', req.body.id);
    console.log('인덱스 페이지에 보낸 데이터', req.body.pw);
    
})


app.listen(8080, ()=>{
    console.log('연결');
})

