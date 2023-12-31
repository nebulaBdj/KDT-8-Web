const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
const router = require('./routes/main');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

//db 싱크
//{force: true} 항상 테이블을 삭제 후 재생성
//{force: false} 테이블이 존재할 경우 새로 생성 안함 없을경우에만 생성 
db.sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})


