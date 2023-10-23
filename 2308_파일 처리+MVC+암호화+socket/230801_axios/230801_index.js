const express = require('express');
const app = express();
const PORT = 8080;

//바디 파서
app.use(express.urlencoded({extended : true }));
app.use(express.json());

// view engine
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('26_work_12');
});

// app.get('/ajax',(req,res)=>{
//     console.log('back', req.query);
//     res.send(req.query);
// })
// app.post('/ajax',(req,res)=>{
//     console.log('back', req.body);
//     res.send(req.body);
// })

// // axios
// app.get('/axios',(req,res)=>{
//     console.log('back', req.query);
//     res.send(req.query);
// })

// app.post('/axios',(req,res)=>{
//     console.log('back', req.body);
//     res.send(req.body);
// })

// //fetch
// app.get('/fetch',(req,res)=>{
//     console.log('back', req.query);
//     res.send(req.query);
// });

//실습1


// app.post('/fetch',(req,res)=>{
//     console.log('back', req.body);
//     res.send(req.body);
// });

app.get('/axios',(req,res)=>{
    console.log('back', req.query);
    res.send(req.query);
})

app.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`);
});