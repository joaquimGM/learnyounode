const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        console.error('There was an error:', err);
    } else {
        files.forEach(file => console.log(file));
    }
});