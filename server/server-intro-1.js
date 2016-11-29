
var http = require("http");


var server = http.createServer(function (request, response) {
    console.log("request at: " + request.method + " url: " + request.url);
    response.end("Hello");
});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
