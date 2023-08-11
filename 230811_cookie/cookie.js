import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static('./views'));
app.use('/static', express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//쿠키 파서
app.use(cookieParser());

//암호화
// app.use(cookieParser('12341234'));

// const date = new Date();
// date.setHours(24);

//쿠키 옵션
const cookieConfig = {
    // httpOnly : 웹 서버를 통해서만 쿠키에 접근할 수 있다.
    // 자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는 것을 차단한다.
    // maxAge : 쿠키 수명 밀리초
    // expires : 만료 날짜를 GMT시간 설정
    // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화 되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송된다
    // 쿠키가 전송될 url을 특정할 수 있다 (기본값 : '/')
    // domain : 쿠키가 전송될 도메인을 특정 가능 ( 기본 값 : 현재 도메인)
    // secure : 웹 브라우저과 웹 서버가 https로 통신하는 경우만 서버에 전송
    // signed : 쿠키의 암호화 결정 ( req.signedCookies 객체에 들어있다.)
    httpOnly: true,
    // expires : date.toGMTString(),
    maxAge: (60 * 1000) * 1440,//1440분
    // signed : true
}

app.get('/', (req, res) => {
    res.render("work12");
});



app.get('/setCookie', (req, res) => {
    
    //쿠키이름 쿠키 값 옵션
    res.cookie('myCookie', 'myVal', cookieConfig);
    res.send('/');
})

// app.get('/checkCookie', (req, res) => {
//     //쿠키이름 쿠키 값 옵션
//     // res.cookie('myCookie', 'myVal', cookieConfig);
//     res.send(req.signedCookies);
// })

// app.get('/delCookie', (req, res) => {
//     res.clearCookie('myCookie', 'myVal', cookieConfig);
//     res.send('clear cookie')
// })

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});