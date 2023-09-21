import mysql from 'mysql';

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '1234',
    database : 'mytable',
});

//연결이 되는지 확인하는 코드
conn.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('connect');
});

const Postsignup = (data, callback) => {
    let sql = `insert into userbywork (userid, name, pw) values('${data.userid}', '${data.name}', '${data.pw}');`;
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log('회원가입 정보 전송', rows);
        callback(rows);
    }); 
};

const Postsignin = (data, callback) => {
    console.log('보내는 값',data);
    let sql = `select * from userbywork where userid = '${data.userid}' and pw = '${data.pw}'; `;
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log('User.js 받은 로그인 정보', rows);
        callback(rows);
    });
};

const PostProfile = (data, callback) => {
    console.log('보내는 아이디 값', data);
    let sql = `select * from userbywork where userid = '${data.profile}';`;
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log('프로필 받은 값',rows);
        callback(rows);
    });
}

const Patchprofile = (data, callback) => {
    console.log('보내는 값-수정',data);
    let sql = `update userbywork set userid ='${data.userid}', name = '${data.name}', pw = '${data.pw}' where id = '${data.id}'; `;
    conn.query(sql, (err, rows) => {
        console.log('수정하고 받은 값', rows)
        callback();
    });

}

const Deleprofile = (data, callback) => {
    console.log('보내는 아이디',data);
    let sql = `delete from userbywork where id = ${data.id};`;
    conn.query(sql, (err, rows) => {
        callback();
    })
}


export { Postsignup, Postsignin, PostProfile, Patchprofile, Deleprofile }

// import mysql from 'mysql'; 왜 안됐을까.. 나중에 혼자 다시 또 해보기

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