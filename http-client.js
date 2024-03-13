const http = require('http');

/*
  * This is a simple HTTP client that sends a GET request to the server and logs the response data to the console
  * The first argument to the program is the URL to send the request to
  * The response object is a Node Stream object, which emits events when data is available
  * You can also use the `setEncoding` method to set the character encoding of the data
*/

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error);