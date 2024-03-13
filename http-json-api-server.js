const http = require('http');
const url = require('url');


// Function to parse the time and return an object with hour, minute, and second
function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

// Function to convert the time to Unix timestamp and return an object with the timestamp
function unixtime(time) {
    return { unixtime: time.getTime() };
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = new URL(req.url, 'http://example.com');
    // Get the time from the query parameter 'iso'
    const time = new Date(parsedUrl.searchParams.get('iso'));
    let result;

    // Check if the request URL matches '/api/parsetime'
    if (/^\/api\/parsetime/.test(req.url)) {
        // Call the parsetime function and assign the result
        result = parsetime(time);
    } 
    // Check if the request URL matches '/api/unixtime'
    else if (/^\/api\/unixtime/.test(req.url)) {
        // Call the unixtime function and assign the result
        result = unixtime(time);
    }

    // If a result is available
    if (result) {
        // Set the response header to indicate JSON content
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Convert the result to JSON and send it as the response body
        res.end(JSON.stringify(result));
    } 
    // If no result is available
    else {
        // Set the response status code to 404 (Not Found)
        res.writeHead(404);
        // End the response without sending any data
        res.end();
    }
});

// Start the server and listen on the specified port
server.listen(Number(process.argv[2]));