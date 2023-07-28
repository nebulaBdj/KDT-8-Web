// const mo = require("./module") // 리콰이어는 옛날 방식이다.

// console.log(mo);

const http = require("http");

const server = http.createServer((request, responce)=>{
    responce.writeHead(200);
    responce.write("<h1>Hello</h1>");
    responce.end("<p>End</p>");
    // try{
    //     const data = fs.readFie
    // }
});

server.listen(3333, function(){
    console.log("localhost : 3333포트로 실행")
});




//1000번대 까지는 어디로 가는지 지정이 되어 있기 때문에 포트 하나를 지정할때 3000번대나 8000번대를 사용한다.