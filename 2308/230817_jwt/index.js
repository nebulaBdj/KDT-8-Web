import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const SECRET = 'secretkey'

app.use(express.urlencoded({extended:true}));   
app.use(express.json());

app.post('/login', (req, res)=>{
    const { id } = req.body;
    const token = jwt.sign({id}, SECRET);
    console.log(token);

    res.send({ result : true, token : token});
});

app.post('/verify', (req, res) => {
    console.log(req.headers.authorization);
    const auth = req.headers.authorization;
    const token = auth.split(' ');
    //split 괄호 안에 있는 것을 기준로 쪼개서 배열 형식으로 지정할 수 있도록 한다.
    if( token[0] === 'Bearer') {
        jwt.verify(token[1], SECRET, (err, decoded) => {
            if( err ) {
                return res.send({result : false, message : '검증 실패'});
            }
            res.send({result : true, user : decoded});
        });
        // 여기서 바로 옆 애를 변수 선언하고 리턴을 할 경우 트라이캐치문으로 받아야하기 때문에 콜백함수 형태로 사용한다
    }else {
        res.send({ result : false, message: '올바른 인증 방식이 아닙니다.' })
    }
});

app.listen(8080, ()=>{
    console.log('연결')
});