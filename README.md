## Accelerometer app

Simple app using React, WebSockets and Node.js with Express.

The idea is to interact between two (or more) devices.

App uses accelerometer in one device (e.g. in smartphone) to display some data on the other device.
In this case user can change color on page by rotating device.

## Live

https://kraw3k.github.io/accelerometer

## Node.js server

```javascript
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

server.listen(4000);
```
