const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extemded : true}));
app.use(express.json());

app.set('view engine','ejs');
// app.set('views','./views');
app.use("/views",express.static(__dirname + "/views"));
app.use("/static",express.static(__dirname + "/static"));

const indexRouter = require("./routes/230805_index");
app.use('/', indexRouter);

app.get('/',(req,res) => {
    res.render('230805_index');
});

app.get( '*' ,(req,res) => {
    res.render('404');
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
