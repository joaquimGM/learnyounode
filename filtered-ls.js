const fs = require ('node:fs')
const path = require('node:path');

/*
  * The fs.readdir() method takes a pathname as its first argument and a callback as its second
  * files is an array of the names of the files in the directory
  * files.filter() returns an array of the files that have the desired extension
  * path.extname(file) === '.' + process.argv[3] returns true if the file has the desired extension
*/
fs.readdir(process.argv[2], (err, files) => {
    if (err) throw err;

    files.filter(file => path.extname(file) === '.' + process.argv[3])
         .forEach(file => console.log(file));
});