// Import the fs module from Node.js
const fs = require('node:fs');

// Read the file and print the number of newlines it contains to the console
const buffer = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});
