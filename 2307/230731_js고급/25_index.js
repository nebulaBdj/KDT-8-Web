const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hello');
});

app.post('/',(req,res) => {
    console.log(req.body);
});

app.listen(PORT, ()=>{
    console.log(`http://http://localhost:${PORT}`);
});