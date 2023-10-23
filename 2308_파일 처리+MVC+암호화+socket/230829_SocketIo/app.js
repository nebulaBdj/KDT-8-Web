const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const PORT = 8000;

// http 서버
const httpServer = http.createServer(app);

// socket 서버
const io = new Server(httpServer);

app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.render("client");
});

app.get("/chat", (req, res)=> {
    res.render("chat");
});

//소켓 // 소켓은 객체 형태로 온다. > 원하는 값을 추가로 넣을 수 있다.
io.on("connection", (socket) => {
    // console.log('조인 전', socket.rooms);
    socket.on('join', (userN)=>{
        socket.room = userN; 
        //콜백 함수 에서 뿐만 아니라 전체에서 사용할려면 위와 같은 방법을 해줘야 전체에서 모두 사용 가능하다
                
        socket.join(userN);
        //prompt로 받은 이름을 전달함으로써 클라이언트에서 방이름을 지정해 만들 수 있도록 바꿈
        //방을 찾아갈 수 있는 이유는 클라이언트가 연결될때 고유한 아이디가 생기는데 그 아이디 뒤에 지정된 방의 이름이 븥으면서 찾아간다.
        
        console.log('rooms 조인 후', socket.rooms);
        console.log('id', socket.id);
        
        //io.to(특정방).emit(이벤트): 특정 방에 전체 사용자에세 메세지 전달(나포함)
        // io.to('chatRoom').emit("userjoin", `${userN}님이 입장하셨습니다`);
        
        //braodcast 포함 시 나를 제외한 모든 사용자에게 메세지 전달 
        io.to(userN).emit('userjoin', socket.id);
    });

    socket.on("message", (id) => {//클라이언트에서 받은 메세지
        console.log('메세지 이벤트', id.msg);
        console.log('메세지 주인', id.id);
        io.to(socket.room).emit('sendM', {id : id.id, msg : id.msg});
        // 클라이언트로 다시 보내는 메세지 따라서 클라이언트에서 또 받아줘야한다.
    })

    // console.log("socket.id : ", socket.id);

    // socket.on("new_message", (arg, cb) => {
    //     console.log(arg);
    //     cb(arg);//cb대신 emit으로 보내도 된다.
    // });

    socket.io;
});

// 서버 오픈
httpServer.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});