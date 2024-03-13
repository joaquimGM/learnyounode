const net = require("node:net");

//This function adds a zero to the left of the number if it is less than 10
function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

// This function returns the current time in the format YYYY-MM-DD hh:mm
function currentTime() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    zeroFill(d.getMonth() + 1) +
    "-" +
    zeroFill(d.getDate()) +
    " " +
    zeroFill(d.getHours()) +
    ":" +
    zeroFill(d.getMinutes())
  );
}

// Create a server that listens to the port passed as an argument
const server = net.createServer(function (socket) {
  // socket.end() sends the current time to the client and closes the connection
  socket.end(currentTime() + "\n");
});

server.listen(Number(process.argv[2]));
