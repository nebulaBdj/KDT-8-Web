const express = require('express');
const app = express();
const PORT = 8080;
const multer = require('multer');
const path = require('path')
// const upload = multer({
//     dest: 'upload/',
// });
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'upload/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },

    }),
    limits: { fileSize: 5*1024*1024 },
})



//ejs
app.set('view engine', 'ejs');
app.use('/views', express.static('./views'));
app.use('/upload', express.static('./upload'));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {
    res.render('index');
});

//싱글
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send("업로드 완료");
})

//여러개
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("업로드 완료");
})

//여러개 2
app.post('/upload/array2', uploadDetail.fields([{name: 'userfile1'}, {name: 'userfile2'}]), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("업로드 완료");
})

//동적
app.post('/upload/dynam', uploadDetail.single('dynam'), 
(req, res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send(req.file);    
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
