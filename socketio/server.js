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

app.get("/", (req, res) => {
  res.render("client");
});

///////// socket

io.on("connection", (socket) => {
  console.log("socket.id : ", socket.id);

  socket.on("new_message", (arg, cb) => {
    console.log(arg);
    cb(arg);
  });

  socket.io;
});

// 서버 오픈
httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
