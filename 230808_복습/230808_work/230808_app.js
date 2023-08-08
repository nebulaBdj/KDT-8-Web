import express from 'express';
import { router } from '../230808_work/routes/user.js';
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static('./views'));
app.use('/static', express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', router);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
});