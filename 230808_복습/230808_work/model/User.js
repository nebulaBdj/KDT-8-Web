// import mysql from 'mysql';

// const conn = mysql.createConnection({
//     host : 'localhost',
//     user : 'user',
//     password : '1234',
//     database : 'mytable',
// });

// const signup_get = (data, callback) => {
//     sql2 = `insert into userbywork (userid, name, pw) values('${data.userid}', '${data.name}', '${data.pw}');`
//     conn.query(sql2, (err, rows) => {
//         if(err) throw err;
//         console.log('post_signup',rows);
//         callback(rows);
//     });
// };

// const signin_get = (userid, userpw, callback) => {
//     sql3 = `select * from userbywork where userid = ${userid} and pw = ${userpw}`
//     conn.query(sql3, (err, rows) =>{
//         if(err) throw err;
//         callback(rows);
//     })
// }

// const getProfile = (callback) =>{
//     const sql1 = 'SELECT * from userbywork;';
//     conn.query(sql1, (err, rows) => {
//         if(err) throw err;
//         console.log('UserInfo : ', rows);
//         callback(rows);
//     });
// };

// export { getProfile, signup_get, signin_get };