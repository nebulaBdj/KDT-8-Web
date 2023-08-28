const ws = require('ws');
const express = require('express')
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
    res.render('client');
});
 
const server = app.listen(PORT, ()=>{
    console.log('http://localhost:8080');
});


const wss = new ws.Server({server}); //서버 연결

//브라우저(클라이언트)들을 담을 변수 선언
const sockets = [];


//socket 변수는 접속한 브라우저
wss.on('connection', (socket) => {
    
    console.log("클라이언트와 연결 완료");// 주소 복사 후 탭을 한번 더 열면 소켓 하나가 더 생성되는 것이다.

    // sockets 변수에 브라우저 추가
    sockets.push(socket);


    socket.on("message", (message) => {//메세지가 생길떄마다
        const msg = JSON.parse(message);// JSON.stringify로 보낸 것을 다시 바꾸어준다.
        console.log(`클라이언트로부터 받은 메세지: ${message}`);
        //클라이언트로 응답 메세지 전송
        // socket.send(`서버메세지: ${message}`);
        sockets.forEach((elem)=>{// 모든 브라우저에 있는 메세지를 반복문으로 전부 다 넣는다
            elem.send(`${message}`);
        });
    });

    //오류
    socket.on("error", (err) => {
        console.log("에러 발생", err);
    });

    //접속 종료
    socket.on("close", () => {
        console.log("클라이언트와 연결 종료");
    });

});