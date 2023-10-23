const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
//view engine
app.set('view engine', 'ejs');

//router
app.get('/', (req, res) => {
    res.render('index');
});
//get으로 정보 받기
app.get('/getPage', (req, res) => {
    res.render('get');
});
// app.post('/resultGet', (req, res) => {
//     //코드 실습
//     const {username, gender, birthYear, birthMonth, birthDay, hobby} = req.body;
//     res.render('result', { title: 'get요청 결과 확인', info : { username, gender, birthYear, birthMonth, birthDay, hobby}});
// });

app.get('/resultGet', (req, res) => {
    //코드 실습
    const {username, gender, birthYear, birthMonth, birthDay, hobby} = req.query;
    res.render('result', { title: 'get요청 결과 확인', info : { username, gender, birthYear, birthMonth, birthDay, hobby}});
});


//post로 정보 받기
app.get('/postPage', (req, res) => {
    res.render('post');
});
app.post('/resultPost', (req, res) => {
    //코드 실습
    console.log(req.body)
    const {username, email, id, gender, birthYear, birthMonth, birthDay, hobby, color, number} = req.body;
    res.render('result', { title: 'post요청 결과 확인', info : { username, email, id, gender, birthYear, birthMonth, birthDay, hobby, color, number }});
});

//서버오픈
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
