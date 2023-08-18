const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;
const fs = require("fs");

app.set("view engine","ejs");
// app.use("public",express.static("/public" )) 정적인 파일 불러오기
// 앞에 있는 views는 경로를 이야기한다. 정적인 파일을 쓰는 거기 떄문에 적합하지 않다.
app.set("views","./views");

app.use(express.static("views"));

// app.use(express.static("public"));// 앞에 아무것도 없으면 바로 연결되는 것이기 때문에 바로 이미지로 들어갈 수 있다.
// app.use("/static",express.static("public"));// 앞에서 사용하는 /static은 웹 페이지에서 사용할 가상 경로를 설정해주는것이다.
app.use("/static",express.static(path.join(__dirname,"public")));
// __dirnamedms public을 문자열로 가지고 오고 path.join 을 통해 절대 경로로 가져오는 것이다.


// app.get("/img",(req, res) => {
//     fs.readFile("pngwing,png", (error, data) => {
//         res.writeHead(200,{'Content-Type': "text/html"});
//         res.end(data);
//     })
// })

app.get("/",(req, res) => {
    //send() 클라이언트에 응답 데이터를 보낼때
    // res.send("Hello express");
    // res.send({result: true, code : 1000, mesage : "회원가입 성공!", data : {name:"dj"}});

    //render() 뷰 엔진 렌더링
    res.render("test4");

})

app.get("/lava",(req, res) => {
    //send() 클라이언트에 응답 데이터를 보낼때
    // res.send("Hello express");
    // res.send({result: true, code : 1000, mesage : "회원가입 성공!", data : {name:"dj"}});

    //render() 뷰 엔진 렌더링
    res.render("test");

})

app.get("/rhkdlf",(req, res) => {
    //send() 클라이언트에 응답 데이터를 보낼때
    // res.send("Hello express");
    // res.send({result: true, code : 1000, mesage : "회원가입 성공!", data : {name:"dj"}});

    //render() 뷰 엔진 렌더링
    res.render("test2_fruits");

})

app.get("/rnrneks",(req, res) => {
    //send() 클라이언트에 응답 데이터를 보낼때
    // res.send("Hello express");
    // res.send({result: true, code : 1000, mesage : "회원가입 성공!", data : {name:"dj"}});

    //render() 뷰 엔진 렌더링
    res.render("test3", { data : [1, 2, 3, 4, 5, 6, 7, 8, 9]});

})


app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
})

//import express from "express";는 최신 버전
console.log(express);