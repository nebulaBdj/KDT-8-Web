const express = require('express');
const app = express();
const PORT = 8080;
let hash = '';

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {

    res.render('index');
});


app.post('/hash', (req, res)=>{
    const {pw} = req.body;
    // const hash = creatHashedPassword(pw);
    // hash = createPbkdf(pw);
    hash = bcryptPassword(pw);
    res.json({ hash });
});

app.post('/verify', (req,res) => {
    const {pw} = req.body;
    // const compare = verifyPassword(pw, salt, hash);
    const compare = comparePassword(pw, hash);
    res.json({compare});
})

app.post('/cipher', (req,res)=>{
    const {data} = req.body;
    const encrypt = cipherEncrypt(data);
    console.log(encrypt);
    const decrypt = decipher(encrypt);
    res.json({ decrypt }); 
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const crypto = require('crypto');

const creatHashedPassword = (password) => {
    //return crypto.createHash(사용할 알고리즘).update(password).digest("base64");
    return crypto.createHash("sha512").update(password).digest("base64");
}

const salt = crypto.randomBytes(16).toString('base64') // 솔트 생성 // 선언부는 어디서 써도 코드가 시작할때, 맨 위로 올라간다.
const iterations = 100; //반복횟수
const keylen = 64; // 생성할 키의 길이
const digest = 'sha512'; // 해시 알고리즘


//암호 생성(단방향)
const createPbkdf = (password) => {
    //pbkdf2함수 (비밀번호, 솔트, 반복 횟수, 키의 길이, 알고리즘)으로 생성되고,
    // 반환되는 값은 Buffer값
    // 버퍼값은 데이터 베이스에 들어가지 않기 때문에 toDtring으로 바꾸어 주어야한다. 
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    console.log(hash);
    return hash.toString('base64');
     //pbkdf2Sync : 비동기
     //pbkdf2 : 동기

}

//암호 비교(단방향)
const verifyPassword = (password, salt, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    if( compare === dbPassword){
        return true;
    } else {
        return false;
    }
};

//양방향 암호화(대칭키 암호화)
const algorithm ="aes-256-cbc"// 256키를 사용, 블록 크기는 128비트
const key = crypto.randomBytes(32)// 1바이트가 8비트기 때문에 32바이트는 256비트이다.
const iv = crypto.randomBytes(16)// 초기화 백터, 데이터 블록을 암호화할때 보안성을 높이기 위해 사용하는 것 

//암호화
const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv)// 암호화 객체 생성 / 키 값을 생성
    let encryptedData = cipher.update(word, 'utf-8', 'base64')// 암호화할 데이터 생성 (입력 인코딩 우리가 입력하기 떄문에 utf-8)
    encryptedData += cipher.final('base64');
    return encryptedData;
}

//복호화
const decipher = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv); //복호화 객체 생성 
    let decrytedData = decipher.update(encryptedData, 'base64', 'utf-8');//입출력 인코딩이 반대로 된다. 입력 base64 출력 utf-8
    decrytedData += decipher.final('utf-8');
    return decrytedData;
}

//벡터 값의 역할은? : 데이터 블록을 암호화할때 보안성을 높이기 위해 사용하는 것
//복호화 객체와 암호화 객체에 대한 설명 다시 부탁 암호화 과정 찾아서 정리


//bcrypt(단방향)
const bcrypt = require('bcrypt');

//특이하게 정수값으로 받는다.
const saltN = 10;

//암호와
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltN);//따로 지정해주지 않아도 base64로 나온다.
}

//비교 비교함수가 따로 존재
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}