const fs = require('fs')

const buffer = fs.readFileSync(process.argv[2]);
const file = buffer.toString();
console.log(file.split('\n').length - 1)