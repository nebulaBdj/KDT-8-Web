// const getVisitors = ()=>{
//     return[
//         {id: 1, name:'홍길동', comment:'내가 왔다'},
//         {id: 2, name:'이찬혁', comment:'으라차차'},
//     ];
// };

// export { getVisitors };

import mysql from 'mysql';
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '1234',
    database : 'mytable',
});

// create user 'user'@'%' identified by '1234';
// grant all privileges on *.* to 'user'@'%' with grant option;
// FLUSH privileges;
// 유저 추가 및 권한 설정

const getVisitors = (cb) => {
    const sql = "SELECT * FROM visitors;";
    conn.query(sql,(err,rows) => {
        if(err) throw err;
        console.log("Visitor :", rows);
        cb(rows);
    });
};

export { getVisitors };