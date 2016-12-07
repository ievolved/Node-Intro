
var http = require("http");


var server = module.exports = http.createServer(function (request, response) {
  console.log(request.method + " " + request.url);
  response.end("Hello");
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://127.0.0.1:" + port + "/");
