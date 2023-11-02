const { Server } = require("node-osc");
const dgram = require("node:dgram");
const socket = dgram.createSocket("udp4");
function fuzz(data) {
  const oscServer = new Server(3333, "0.0.0.0");

  oscServer.on("error", function (err) {
    oscServer.close();
  });

  oscServer.on("message", function (msg) {
    console.log(`Message: ${msg}`);
    oscServer.close();
  });

  oscServer.on("listening", function () {
    socket.send(data, 3333, "127.0.0.1");
  });
}

module.exports = {
  fuzz,
};
