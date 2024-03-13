const http = require("http");
const bl = require("bl");
const results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  // Make the request and add
  http.get(process.argv[2 + index], function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) {
          return console.error(err);
        }

        // Store the data in the results array and increment the count
        results[index] = data.toString();
        count++;

        // We need to print the results only when all the requests are done
        if (count === 3) {
          printResults();
        }
      })
    );
  });
}

// Make 3 requests
for (let i = 0; i < 3; i++) {
  httpGet(i);
}
