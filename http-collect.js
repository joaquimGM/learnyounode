const http = require("http");
const bl = require("bl");

/*
  * When you pipe a stream through a bl instance, it collects all the data until the stream ends.
  * Once the stream ends, it calls a callback function with the collected data. 
  * This is useful when you want to collect all data from a stream before processing it, 
    such as in the case of an HTTP response.
 */

http.get(process.argv[2], function (response) {
  response.pipe(
    bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
