import express from 'express';
import session from 'express-session';
const app = express();
const PORT = 8080;

//세션
//옵션 겍체
// httpOnly : 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
// secure : 값을 트루로 주면 https에서만 세션을 주고받음
// secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명값(세션을 발급할 때 사용하는 키) 필수로 사용한다.
// resave : 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 가시 저장할 것인지 물어본다.
// saveUninitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
// (초기값이 없을때, 세션을 만들지 안만들지 물어봄)
app.use(session({
    secret : 'mySessionKey',
    resave : false,
    saveUninitialized : true, 

}));




app.set(session());

app.get('/', (req,res)=>{
    req.session.name = '전우치';
    res.send('세션 설정 완료');
});

app.get('/name', (req,res)=>{
    res.send(req.session.name);
});

app.get('/destroy', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/');
        // 세션이 삭제되면 그 페이지에 접속하면 안되기 때문에 홈으로 돌아가거나 어떠한 조치를 취해야한다
    });
});

app.listen(PORT);
// , (req,res)=>{res.send('굳')}
// 포트를 열기