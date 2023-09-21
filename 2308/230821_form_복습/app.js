const express = require('express');
const app = express();
const PORT = 8080;

//뷰 엔진
app.set('view engine', 'ejs');
// 뷰즈라는 설정을 다른 폴더로 바꿀떄 쓰는 오션이기에 기본으로 뷰즈 폴더를 사용하면 입력하지 않아도된다.
app.set('view', './views');
//바디 파서
app.use(express.urlencoded({extended:true}))
//extended 중첩된 객체표현을 허용할지 말지 결정
//application/x-www-form-urlencoded
app.use(express.json());
//application/json

//router
//페이지를 지정할떄는 미들웨어 use 사용
//페이지 불러올 떄 use를 사용하지 않는 이유는 http 전송방식을 이해하지 못하기 때문이다.
// 같은 url로 get과 post를 만들 수 있지만 접근이 불가하기떄문에 실용성이 떨어진다.
//예를 들어 get 방식의 get방식ㅇ의 로그인 페이지와 포스트 방식응의 로그인응ㄴ 다른 페이지지만 동일하게 취급한다.
//404일때 사용
//즉 모든 페이지를 받을 때만 사용한다.
//use 쓸떄는 순서사 절맣 중요하다.

app.get('/', (req, res)=>{
    //render 페이지를 렌더링 
    res.render('app')
})

app.get('/getform', (req, res)=>{
    const { id, pw } = req.query// req.query에 구조 분해 할당
    res.render('result', {title: 'get요청 결과 확인', userinfo:{id: id, pw: pw }});//result 페이지에 데이터 전송
    // 객체에서 키값과 그 키에 대한 값이 동일하다면 그냥 적을 수 있다.
    // userinfo:{id: id, pw: pw } > userinfo:{id, pw}
})
//get방식은 request에 쿼리 형태로 접근

app.post('/postForm', (req, res) => {
    //post 방식은 request에 body 형태로 접근
    const { id, pw } = req.body
    res.render('result', {title: 'post요청 결과 확인', userinfo:{id: id, pw: pw }});

})

app.use('*', (req, res) => {
    res.render('404');
})




app.listen(PORT, ()=>{
    console.log('끝');
})