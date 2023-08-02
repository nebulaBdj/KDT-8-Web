const express = require('express');
const app = express();
const PORT = 8080;

//바디 파서
app.use(express.urlencoded({extended : true }));
app.use(express.json());

// view engine
app.set('view engine','ejs');
app.set('views','./views');

//라우터
app.get('/', (req,res) => {
    res.render('index');
});

//get으로 정보 받기
app.get('/getPage',(req, res)=>{
    res.render('get');
})
app.get('/resultGet', (req,res)=>{
    console.log(req.query);
    res.render('result',{title: 'Get방식', userInfo: req.query});
});//정적일때는 무조건 name으로 가져올 수 있다. 동적일때는 다른 방식 가능

//post으로 정보 받기
app.get('/postPage',(req, res)=>{
    res.render('post');
});

app.get('/resultPost', (req,res)=>{
    console.log(req.query);
    res.render('result',{title: 'Post방식', userInfo: req.body});
});

app.listen(PORT, () => {
    console.log(`http://localhost${PORT}`);
});