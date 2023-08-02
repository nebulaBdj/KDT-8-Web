const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8080;

//바디 파서
app.use(express.urlencoded({extended : true }));
app.use(express.json());

// view engine
app.set('view engine','ejs');
app.set('views','./views');

//정적파일경로
app.use('/upload', express.static('upload'))

const upload = multer({
    dest: 'upload/',
    //업로드할 파일을 저장할 경로를 지정
})

const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    //diskStorage: 파일을 디스트에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done){//done은 콜백
            done(null, 'upload/');//null값에는 에러처리
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);//확장자를 가져오는 놈
            console.log(ext);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits : { fileSize: 1024*1024*5 },
});

app.get('/',(req,res)=>{
    res.render('230802_work');
});
// //싱글
// app.post('/upload', uploadDetail.single('userfile'), (req,res) => {
//     console.log(req.file);
//     console.log(req.body);
// })
// //멀티1
// app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
//     console.log(req.files);
//     console.log(req.body);  
// })
// //멀티2
// app.post('/upload/fields', uploadDetail.fields([{name:'userfile1'},{name:'userfile2'}]), (req, res) => {
//     console.log(req.files);
//     console.log(req.body);  
// })


//동적
app.post('/dynamicFile', uploadDetail.single('dynamic-userfile'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

app.post('/axios',(req,res)=>{
    console.log('back', req.body);
    res.send(req.body);
})


app.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`);
});