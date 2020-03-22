var express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  io = require("socket.io").listen(server);

app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", function(socket) {
  socket.on("dataFromSensor", function(data) {
    io.emit("dataFromServer", data);
  });
});

server.listen(4000, () => console.log("server started"));
