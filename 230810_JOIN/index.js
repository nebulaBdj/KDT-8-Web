const express = require('express');
const app = express();
const PORT = 8080;
const db = require('./models');

app.set('view engine', 'ejs');
app.use('/views', express.static('./views'));
app.use('/static', express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


const router = require('./routes/student');
app.use('/', router);

db.sequelize.sync({force: true}).then(() => {//true 값을 넣어야 다시 index.js를 실행할 때 삭제하고 다시만들어준다.
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});