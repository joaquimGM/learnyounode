const http = require("node:http");
const fs = require("node:fs");

/* 
  * Create a server that listens to the port passed as an argument.
  * This server will send the file passed as an argument to the client
    when the client makes a request .
 */

const server = http.createServer(function (req, res) {
    // const stream receives the file to be sent to the client
  const stream = fs.createReadStream(process.argv[3]);
  stream.pipe(res);
});

server.listen(Number(process.argv[2]));
